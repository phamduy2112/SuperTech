import axios from "axios";
import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
import { io } from '../socker/socker.js';
const models = initModels(sequelize);
const { order, history_bank, bankauto } = models;


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
export {  getautobank };