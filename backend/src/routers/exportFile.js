import express from 'express';
import isAuthenticated from '../config/auth.js';
import { middleToken } from '../config/jwt.js';
import { getdiscount, getdiscountById, creatediscount, applyDiscount, deletediscount, createUserDiscount } from '../controllers/discountController.js';
import { exportFile, exportFilePDF } from '../controllers/exportFile.js';
const getCatelories = express.Router();

getCatelories.post('/export-excel',exportFile)
getCatelories.post('/export-pdf',exportFilePDF)

export default getCatelories
