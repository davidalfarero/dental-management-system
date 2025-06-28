import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import SibApiV3Sdk from 'sib-api-v3-sdk';
import { sendInquiryEmail, sendPatientConfirmationEmail } from './email/emailTemplates.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/send-booking', async (req, res) => {
  const { name, email, phone, subject, schedule, message } = req.body;

  const client = SibApiV3Sdk.ApiClient.instance;
  const apiKey = client.authentications['api-key'];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  const adminHtml = sendInquiryEmail(name, email, phone, subject, schedule, message);
  const patientHtml = sendPatientConfirmationEmail(name, subject, schedule);

  const sendSmtpEmail = {
    to: [{ email: process.env.CLINIC_EMAIL, name: "Clinic Admin" }],
    sender: { email: process.env.CLINIC_EMAIL, name: "Dental Booking" },
    subject: "📬 New Patient Inquiry Received",
    htmlContent: adminHtml,
  };

  const patientEmail = {
    to: [{ email, name }],
    sender: { email: process.env.CLINIC_EMAIL, name: "Dental Clinic" },
    subject: "🦷 We've Received Your Inquiry",
    htmlContent: patientHtml,
  };
  try {
    await Promise.all([
      apiInstance.sendTransacEmail(sendSmtpEmail),
      apiInstance.sendTransacEmail(patientEmail),
    ]);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Brevo Error:", error.response?.body || error.message);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => (
  console.log(`Server is running on port: ${PORT}`)
));