import axios from "axios";
import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
import { io } from "../socker/socker.js";

const models = initModels(sequelize);
const { order, history_bank, bankauto } = models;

const checkTransactionStatus = async (req, res) => {
    try {
        const response = await axios.get("https://api.sieuthicode.net/historyapimbbankv2/8ae40d79209943b0807b5a762469e4ff");
        const { transactions } = response.data;
        const recentTransactions = transactions.slice(0, 5);
        let processedTransactions = [];
        let updatePromises = [];

        for (const transaction of recentTransactions) {
            const { description, amount, transactionID } = transaction;

            const existingTransaction = await history_bank.findOne({
                where: { transactionId: transactionID }
            });

            if (existingTransaction) {
                // console.log(`Transaction ${transactionID} already processed.`);
                continue;
            }

            if (description.includes("supertech")) {
                const orderIdMatch = description.match(/supertech(\d+)/);
                if (orderIdMatch) {
                    const orderId = orderIdMatch[1];
                    // console.log(`Extracted order_id: ${orderId} from description: ${description}`);
        
                    const matchedOrder = await order.findOne({
                        where: { order_id: orderId }
                    });
        
                    if (matchedOrder) {
                        await history_bank.create({
                            transactionId: transactionID,
                            description: description,
                            orderId: orderId,
                            amount: amount
                        });

                        processedTransactions.push({transactionID, description, amount, status: "Processed"});
                       
                        const orderUpdate= order.update({ order_pay: 1 }, { where: { order_id: orderId } })
                     
                       
                       updatePromises.push(orderUpdate);
                      
                    } else {
                        processedTransactions.push({transactionID, description, amount, status: "No matching order"});
                    }
                    
                } else {
                    processedTransactions.push({transactionID, description, amount, status: "Invalid order_id"});
                }
            } else {
                processedTransactions.push({transactionID, description, amount, status: "Invalid description"});
            }
        }
        await Promise.all(updatePromises);
        responseSend(res, processedTransactions, "5 giao dịch gần nhất đã được xử lý thành công.", 200);
    } catch (error) {
        responseSend(res, error.message, "Error checking transactions.", 500);
    }
};

const updateOrderPay = async (req, res) => {
    const { orderId } = req.params;
    const { order_pay } = req.body;

    if (order_pay === undefined) {
        return responseSend(res, "", "order_pay is required", 400);
    }

    try {
        const orderToUpdate = await order.findOne({
            where: { order_id: orderId }
        });

        if (!orderToUpdate) {
            return responseSend(res, "", "Order not found", 404);
        }

        await order.update({ order_pay }, {
            where: { order_id: orderId }
        });
 

        responseSend(res, { order_id: orderId, order_pay }, "Order updated successfully", 200);

    } catch (error) {
        console.error("Error updating order:", error);
        responseSend(res, error.message, "Error updating order", 500);
    }
};

export { updateOrderPay };

const getautobank = async (req, res) => {
    try {
        let data = await bankauto.findAll();
        responseSend( res, data, "Thành Công", 200);

    } catch (error) {
        responseSend( res, "","Có lỗi xảy ra", 500)
    }
};
export { checkTransactionStatus, getautobank };