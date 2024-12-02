import express from "express";
import { checkTransactionStatus,getautobank, updateOrderPay } from '../controllers/bankAutoController.js';

const autobankrouter = express.Router();

autobankrouter.get("/check-transactions", checkTransactionStatus);
autobankrouter.get("/autobank", getautobank);
autobankrouter.put("/update-order-pay/:orderId", updateOrderPay);

export default autobankrouter;
