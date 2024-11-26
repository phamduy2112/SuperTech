import express from "express";
import { checkTransactionStatus,getautobank } from '../controllers/bankAutoController.js';

const autobankrouter = express.Router();

autobankrouter.get("/check-transactions", checkTransactionStatus);
autobankrouter.get("/autobank", getautobank);

export default autobankrouter;
