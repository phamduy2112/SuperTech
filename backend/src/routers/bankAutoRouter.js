import express from "express";
import {getautobank, updateOrderPay } from '../controllers/bankAutoController.js';

const autobankrouter = express.Router();

autobankrouter.get("/autobank", getautobank);
autobankrouter.put("/update-order-pay/:orderId", updateOrderPay);

export default autobankrouter;
