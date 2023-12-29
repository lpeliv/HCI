import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, writing } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'your-smtp-host',
      port: 587,
      secure: false,
      auth: {
        user: 'your-smtp-username',
        pass: 'your-smtp-password',
      },
    });

    const mailOptions = {
      from: email,
      to: adminEmail,
      text: `Hello ${name},\n\n${writing}`,
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