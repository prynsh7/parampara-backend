import express from "express";
import submitOrderValidator from "../validators/submitOrderValidator.js";
import { submitOrder } from "../controllers/orders/submitOrder.js";

const router = express.Router();

router.route("/new-order").post(submitOrderValidator, submitOrder);

export default router;
