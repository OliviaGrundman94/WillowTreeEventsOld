//sending email

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { fullname, phone, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail', // or another email service
        auth: {
            user: 'olivia.grundman@gmail.com',
            pass: 'SpainPoolAbuela123!',
        },
    });

    const mailOptions = {
        from: email,
        to: 'olivia.grundman@gmail.com',
        subject: 'New Event Enquiry',
        text: `Full Name: ${fullname}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.send('Email sent successfully');
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
