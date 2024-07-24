require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// Проверка наличия необходимых переменных окружения
if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("Please define EMAIL_USER and EMAIL_PASS in the .env file");
    process.exit(1);
}

// Настройка транспортера Nodemailer
const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});

// Проверка транспортера на готовность к отправке писем
contactEmail.verify((error) => {
    if (error) {
        console.error("Nodemailer verification failed:", error);
    } else {
        console.log("Nodemailer is ready to send emails.");
    }
});

// Обработка предварительных запросов CORS
app.options("/contact", cors());

// Маршрут для обработки отправки контактной формы
router.post("/contact", (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const name = `${firstName} ${lastName}`;

    console.log("Received request:", { name, email, phone, message }); // Логирование данных запроса

    const mail = {
        from: name,
        to: EMAIL_USER,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`,
    };

    // Отправка письма
    contactEmail.sendMail(mail, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            res.json({ code: 500, status: "Error sending message" }); // Возвращение кода ошибки
        } else {
            console.log("Email sent successfully:", info.response);
            res.json({ code: 200, status: "Message Sent" }); // Возвращение кода успешной отправки
        }
    });
});
