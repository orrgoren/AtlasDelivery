import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, company, service, message } =
            await req.json();

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Email template for your business
        const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">בקשת יצירת קשר חדשה - אטלס שילוח והפצה</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-bottom: 15px;">פרטי הלקוח:</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">שם:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">אימייל:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">טלפון:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${phone}</td>
            </tr>
            ${
                company
                    ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">חברה:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${company}</td>
            </tr>
            `
                    : ""
            }
            ${
                service
                    ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">סוג שירות:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${service}</td>
            </tr>
            `
                    : ""
            }
          </table>
        </div>
        
        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
          <h3 style="color: #1e293b; margin-bottom: 15px;">הודעה:</h3>
          <p style="line-height: 1.6; color: #475569;">${message.replace(/\n/g, "<br>")}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-left: 4px solid #3b82f6;">
          <p style="margin: 0; color: #1e40af; font-size: 14px;">
            הודעה זו נשלחה דרך טופס יצירת הקשר באתר אטלס שילוח והפצה
          </p>
        </div>
      </div>
    `;

        // Send email using Resend
        const { error } = await resend.emails.send({
            from: "אתר אטלס שילוח והפצה <atlas@llwebworks.co.il>", // Replace with your verified domain
            to: ["atlas.delivery03@gmail.com"], // Your business email
            subject: `בקשת יצירת קשר חדשה מ${name}`,
            html: emailContent,
            replyTo: email, // So you can reply directly to the customer
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }

        // Send confirmation email to the customer
        const confirmationEmail = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">תודה על פנייתכם - אטלס שילוח והפצה</h2>
        
        <p style="font-size: 16px; line-height: 1.6;">שלום ${name},</p>
        
        <p style="font-size: 16px; line-height: 1.6;">
          תודה על פנייתכם אלינו. קיבלנו את הודעתכם ואחד מנציגי השירות שלנו יחזור אליכם בהקדם האפשרי.
        </p>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b;">פרטי הפנייה שלכם:</h3>
          <p><strong>נושא:</strong> ${service || "בקשה כללית"}</p>
          <p><strong>הודעה:</strong></p>
          <p style="background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
        </div>
        
        <p style="font-size: 16px; line-height: 1.6;">
          אם יש לכם שאלות דחופות, תוכלו ליצור איתנו קשר גם בטלפון: <strong>055-2626-640</strong>
        </p>
        
        <p style="font-size: 16px; line-height: 1.6;">
          בברכה,<br>
          צוות אטלס שילוח והפצה
        </p>
      </div>
    `;

        await resend.emails.send({
            from: "אטלס שילוח והפצה <noreply@yourdomain.com>",
            to: [email],
            subject: "תודה על פנייתכם - אטלס שילוח והפצה",
            html: confirmationEmail,
        });

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
