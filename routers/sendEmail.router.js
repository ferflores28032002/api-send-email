
import { Router } from "express";
import { sendEmail } from "../controllers/sendEmail.controller.js";

const router = Router();

// EndPoint de envio de gmail con nodemailer

router.post('/sendEmail', sendEmail)



export default router;