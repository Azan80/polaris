// import type { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { firstName, lastName, email, phone, message }: FormData = req.body;

//     const transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Email to admin
//     const adminMailOptions = {
//       from: email,
//       to: process.env.EMAIL_USER,
//       subject: 'Contact Form Submission',
//       text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
//     };

//     // Email to user
//     const userMailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Thank You for Contacting Us',
//       text: `Hi ${firstName} ${lastName},\n\nThank you for reaching out! We have received your message and will get back to you as soon as possible.\n\nHere’s a copy of your message:\n\n${message}\n\nBest regards,\nPolaris Ecosyestem`,
//     };

//     try {
//       // Send email to admin
//       await transporter.sendMail(adminMailOptions);

//       // Send confirmation email to user
//       await transporter.sendMail(userMailOptions);

//       res.status(200).json({ message: 'Emails sent successfully' });
//     } catch (error) {
//       console.error('Error sending emails:', error);  // Log the error for debugging
//       res.status(500).json({ error: 'Failed to send emails' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, message }: FormData = req.body;

    // Ensure required environment variables are present
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(500).json({ error: 'Email configuration is missing' });
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: 'Contact Form Submission',
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    // Email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting Us',
      text: `Hi ${firstName} ${lastName},\n\nThank you for reaching out! We have received your message and will get back to you as soon as possible.\n\nHere’s a copy of your message:\n\n${message}\n\nBest regards,\nPolaris Ecosystem`,
    };

    try {
      // Send email to admin
      await transporter.sendMail(adminMailOptions);

      // Send confirmation email to user
      await transporter.sendMail(userMailOptions);

      res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
      console.error('Error sending emails:', error);  // Log the error for debugging
      res.status(500).json({ error: 'Failed to send emails' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
