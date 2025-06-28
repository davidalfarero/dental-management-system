import { formatSchedule } from '../utils/formatDateTime.js';

export const sendInquiryEmail = (name, email, phone, subject, schedule, message) => {
  const formattedSchedule = formatSchedule(schedule);

  return (`
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://dummyimage.com/150x50/0d6efd/ffffff&text=Dental+Clinic" alt="Logo" style="max-width: 150px; height: auto;" />
      </div>

      <h2 style="color: #0D6EFD; border-bottom: 1px solid #ccc; padding-bottom: 8px;">
        📬 New Patient Inquiry
      </h2>

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
          <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
          <td style="padding: 8px 0;">${subject}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Preferred Schedule:</td>
          <td style="padding: 8px 0;">${formattedSchedule}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
          <td style="padding: 8px 0; white-space: pre-line;">${message}</td>
        </tr>
      </table>

      <div style="text-align: center; margin: 30px 0;">
        <a href="https://yourdentalclinic.com/schedule" target="_blank"
          style="background-color: #0D6EFD; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 6px; display: inline-block; font-weight: bold;">
          📅 Schedule Now
        </a>
      </div>

      <p style="font-size: 13px; color: #888; text-align: center;">
        This message was sent from your dental website contact form.
      </p>
    </div>
`);
}
  ;

export const sendPatientConfirmationEmail = (name, subject, schedule) => {
  const formattedSchedule = formatSchedule(schedule);

  return (`
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://dummyimage.com/150x50/0d6efd/ffffff&text=Dental+Clinic" alt="Clinic Logo" style="max-width: 150px; height: auto;" />
      </div>

      <h2 style="color: #0D6EFD; border-bottom: 1px solid #ccc; padding-bottom: 8px;">🦷 Booking Inquiry Received</h2>

      <p>Hi <strong>${name}</strong>,</p>

      <p>Thank you for reaching out to our dental clinic. We’ve received your booking inquiry with the following details:</p>

      <table style="width: 100%; margin-top: 15px; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
          <td style="padding: 8px 0;">${subject}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Preferred Schedule:</td>
          <td style="padding: 8px 0;">${formattedSchedule}</td>
        </tr>
      </table>

      <p>Our team will review your request and reach out shortly to confirm the schedule. Once confirmed, you'll receive a separate confirmation email with full details.</p>

      <p>If you have any urgent concerns, please don’t hesitate to contact us via phone or email.</p>

      <p style="margin-top: 30px;">Best regards,<br/><strong>The Dental Clinic Team</strong></p>

      <p style="margin-top: 20px; font-size: 14px; color: #888; text-align: center;">
        This is an automated message — please do not reply directly to this email.
      </p>
    </div>
`);
};
