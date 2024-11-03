import express from "express";
import { processOrder } from "../controllers/orderControllers.js";

const router = express.Router();

router.post("/", processOrder);

export default router;
