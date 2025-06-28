export const sendInquiryEmail = (name, email, phone, message) => `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto;">
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://via.placeholder.com/150x50?text=Clinic+Logo" alt="Logo" style="max-width: 150px; height: auto;" />
    </div>

    <h2 style="color: #0D6EFD; border-bottom: 1px solid #ccc; padding-bottom: 8px;">📬 New Patient Inquiry</h2>

    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Name:</td>
        <td style="padding: 8px 0;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Email:</td>
        <td style="padding: 8px 0;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
        <td style="padding: 8px 0;">${phone}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
        <td style="padding: 8px 0; white-space: pre-line;">${message}</td>
      </tr>
    </table>

    <p style="margin-top: 30px; font-size: 14px; color: #888;">This message was sent from your dental website contact form.</p>
  </div>
`;

export const sendPatientConfirmationEmail = (name) => `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto;">
  <div style="text-align: center; margin-bottom: 20px;">
    <img src="https://via.placeholder.com/150x50?text=Clinic+Logo" alt="Clinic Logo" style="max-width: 150px; height: auto;" />
  </div>

  <h2 style="color: #0D6EFD; border-bottom: 1px solid #ccc; padding-bottom: 8px;">🦷 Booking Inquiry Received</h2>

  <p>Hi <strong>${name}</strong>,</p>

  <p>Thank you for reaching out to our dental clinic. Your booking inquiry has been successfully received.</p>

  <p>Our team will review your request and get back to you shortly to confirm the schedule. Once your booking is confirmed, you will receive a separate confirmation email with the details.</p>

  <p>If you have any urgent concerns, feel free to contact us directly via phone or email.</p>

  <p style="margin-top: 30px;">Best regards,<br/><strong>The Dental Clinic Team</strong></p>

  <p style="margin-top: 20px; font-size: 14px; color: #888;">This is an automated message — please do not reply directly to this email.</p>
</div>
`;
