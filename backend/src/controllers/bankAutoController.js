import axios from "axios";
import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);
const { order, history_bank, bankauto } = models;

const checkTransactionStatus = async (req, res) => {
    try {
        const response = await axios.get("https://api.sieuthicode.net/historyapivcbv2/e5a36bf27929ed0411a791c49594f716");
        const { transactions } = response.data;

        const recentTransactions = transactions.slice(0, 10);
        console.log("Recent Transactions: ", recentTransactions);

        let processedTransactions = [];

        for (const transaction of recentTransactions) {
            const { description, amount, transactionID } = transaction;

            const existingTransaction = await history_bank.findOne({
                where: { transactionId: transactionID }
            });

            if (existingTransaction) {
                console.log(`Transaction ${transactionID} already processed.`);
                continue;
            }

            if (description.includes("supertech")) {
                const orderIdMatch = description.match(/supertech(\d+)/);
                if (orderIdMatch) {
                    const orderId = orderIdMatch[1];
                    console.log(`Extracted order_id: ${orderId} from description: ${description}`);
        
                    const matchedOrder = await order.findOne({
                        where: { order_id: orderId }
                    });
        
                    if (matchedOrder) {
                        console.log(`Thanh Toán Thành Công !:`, matchedOrder.dataValues);
                        await history_bank.create({
                            transactionId: transactionID,
                            description: description,
                            orderId: orderId,
                            amount: amount
                        });
                        console.log("Transaction saved to history_bank.");
                        processedTransactions.push({transactionID, description, amount, status: "Processed"});
                    } else {
                        console.log(`No matching order found for order_id: ${orderId}`);
                        processedTransactions.push({transactionID, description, amount, status: "No matching order"});
                    }
                } else {
                    console.log("No valid order_id found in description.");
                    processedTransactions.push({transactionID, description, amount, status: "Invalid order_id"});
                }
            } else {
                console.log("Description does not include 'supertech'.");
                processedTransactions.push({transactionID, description, amount, status: "Invalid description"});
            }
        }
        responseSend(res, processedTransactions, "5 giao dịch gần nhất đã được xử lý thành công.", 200);
    } catch (error) {
        console.error("Error checking transactions:", error);
        responseSend(res, error.message, "Error checking transactions.", 500);
    }
};


const getautobank = async (req, res) => {
    try {
        let data = await bankauto.findAll();
        responseSend( res, data, "Thành Công", 200);

    } catch (error) {
        responseSend( res, "","Có lỗi xảy ra", 500)
    }
};
export { checkTransactionStatus, getautobank };