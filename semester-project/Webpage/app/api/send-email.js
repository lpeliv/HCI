import nodemailer from 'nodemailer';
import mailgunTransport from 'nodemailer-mailgun-transport';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, writing } = req.body;
    
    const transporter = nodemailer.createTransport(
      mailgunTransport({
        auth: {
          api_key: 'd6899d3915e4d58b614c2549793f0292-1900dca6-2a24d524',
          domain: 'sandbox0cff336ae8e54f2e8c0e26c420ec3a65.mailgun.org',
        },
      })
    );

    const mailOptions = {
      from: 'noreply@example.com',
      to: name,
      subject: 'Subject of the email',
      text: 'Thank you for your feedback!',
    };
    try {
      
      const info = await transporter.sendMail(mailOptions);

      console.log('Email sent:', info);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}