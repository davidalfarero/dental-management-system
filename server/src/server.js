import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import SibApiV3Sdk from 'sib-api-v3-sdk';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/send-booking', async (req, res) => {
  const { name, email, phone, message } = req.body;

  const client = SibApiV3Sdk.ApiClient.instance;
  const apiKey = client.authentications['api-key'];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  const sendSmtpEmail = {
    to: [{ email: process.env.CLINIC_EMAIL, name: "Clinic Admin" }],
    sender: { email: process.env.CLINIC_EMAIL, name: "Dental Booking" },
    subject: "🦷 New Booking Request",
    htmlContent: `
      <h2>New Booking from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Brevo Error:", error);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }

});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => (
  console.log(`Server is running on port: ${PORT}`)
));