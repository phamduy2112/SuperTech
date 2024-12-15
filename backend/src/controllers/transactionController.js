
import axios from "axios";
import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
import { io } from '../socker/socker.js';
import { Socket } from "socket.io";
const models = initModels(sequelize);
const { order, history_bank, bankauto } = models;
const checkTransactionStatus = async (req, res) => {
    try {
        //mb bank
        // const response = await axios.get("https://api.sieuthicode.net/historyapimbbankv2/8ae40d79209943b0807b5a762469e4ff"); 
        //vietcombank
        const response = await axios.get("https://api.sieuthicode.net/historyapivcbv2/e5a36bf27929ed0411a791c49594f716");
        const { transactions } = response.data;
        if (!transactions || transactions.length === 0) {
            console.log("Không có giao dịch mới.");
            responseSend(res, [], "Không có giao dịch mới.", 200);
            return;
        }
        const recentTransactions = transactions.slice(0, 10);
        let processedTransactions = [];
        let updatePromises = [];
        console.log('====================================');
        console.log('0000000');
        console.log('====================================');
        for (const transaction of recentTransactions) {
            const { description, amount, transactionID } = transaction;
            console.log('====================================');
            console.log('1111111');
            console.log('====================================');
            if (!description || !description.includes("supertech")) {
                processedTransactions.push({transactionID, description, amount, status: "Không Có Nội Dung Hợp Lệ !"});
                continue;
            }
            
            const existingTransaction = await history_bank.findOne({
                where: { transactionId: transactionID }
            });
        
            if (existingTransaction) {
                continue;
            }
        
            const orderIdMatch = description.match(/supertech(\d+)/);
        
            if (orderIdMatch) {
                const orderId = orderIdMatch[1];
        
                try {
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
                        processedTransactions.push({transactionID, description, amount, status: "Đã Thanh Toán"});
                        const updateorder = await order.update({ order_pay: 1 }, { where: { order_id: orderId } });
                        updatePromises.push(updateorder);
        
                        const resp = {
                            user: matchedOrder.user_id,
                            order_pay: updateorder[0]
                        };
                       
                        console.log("Transaction saved to history_bank.", resp);
                        io.emit('orderStatusUpdated', resp);
                     
                    } else {
                        processedTransactions.push({transactionID, description, amount, status: "No matching order"});
                    }
                } catch (error) {
                    console.error(`Error processing transaction ${transactionID}:`, error);
                    processedTransactions.push({transactionID, description, amount, status: "Error processing transaction"});
                }
            } else {
                processedTransactions.push({transactionID, description, amount, status: "Invalid order_id"});
            }
        }
        console.log("Transaction saved to history_bank.");
        await Promise.all(updatePromises);
        responseSend(res, processedTransactions, "5 giao dịch gần nhất đã được xử lý thành công.", 200);
    } catch (error) {
        responseSend(res, error.message, "Lỗi Kiểm Tra API LSGD:", 500);
    }
};

export {  checkTransactionStatus };