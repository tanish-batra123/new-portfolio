import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // ✅ CORS headers (optional if frontend calls same domain)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end(); // handle preflight request
  }

  if (req.method === "POST") {
    const { Name, emailid, Message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL, // your Gmail
          pass: process.env.EMAIL_PASSWORD, // App Password
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL,
        to: "tanishbatra893@gmail.com",
        subject: `New message from ${Name}`,
        text: `Name: ${Name}\nEmail: ${emailid}\nMessage: ${Message}`,
      });

      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to send email." });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
