// pages/api/sendEmail.js
import { contactForm } from '@/utils/firebase';
export async function POST (req, res) {

        const body = await req.json()

       

        try {
            await contactForm(body);
            return new Response(JSON.stringify({ message: 'Emails sent successfully', success: true }), {
                status: 200,
            });
            
           
        } catch (error) {
            return new Response(JSON.stringify({ message: 'Error sending email',success:false }), {
                status: 200,
            });

        }
   
};
