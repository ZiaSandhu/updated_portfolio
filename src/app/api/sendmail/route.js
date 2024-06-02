// pages/api/sendEmail.js
import nodemailer from 'nodemailer';
export async function POST (req) {

        const body = await req.json()
        const { name, email, subject, message } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const notificationMailOptions = {
            from: `"Zia Ur Rehman" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // your email
            subject: 'New Contact Form Submission',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px; background-color: #f9f9f9; }
                        .header { text-align: center; padding-bottom: 20px; }
                        .content { margin-top: 20px; }
                        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #777; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>New Contact Form Submission</h2>
                        </div>
                        <div class="content">
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Subject:</strong> ${subject}</p>
                            <p><strong>Message:</strong></p>
                            <p>${message}</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

        const confirmationMailOptions = {
            from: `"Zia Ur Rehman" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Thank You for Contacting Me!',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px; background-color: #f9f9f9; }
                        .header { text-align: center; padding-bottom: 20px; }
                        .content { margin-top: 20px; }
                        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #777; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>Thank You for Contacting Me!</h2>
                        </div>
                        <div class="content">
                            <p>Dear ${name},</p>
                            <p>Thank you for reaching out to me through my portfolio contact form. I have received your message and will get back to you as soon as possible.</p>
                            <p>Here is a copy of your message for your reference:</p>
                            <p><strong>Your Message:</strong></p>
                            <p>${message}</p>
                            <p>Best regards,</p>
                            <p>Zia Ur Rehman</p>
                        </div>
                        <div class="footer">
                            <p>&copy; 2024 Zia Ur Rehman. All rights reserved.</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

        try {
            await transporter.sendMail(confirmationMailOptions);
            await transporter.sendMail(notificationMailOptions);
            return new Response(JSON.stringify({ message: 'Email Send Successfully',success:true }), {
                status: 200,
            });
           
        } catch (error) {
            return new Response(JSON.stringify({ message: 'Error sending email',success:false }), {
                status: 200,
            });

        }
   
};
