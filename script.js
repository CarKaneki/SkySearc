document.addEventListener('DOMContentLoaded', function() {
    const supportForm = document.getElementById('support-form');

    supportForm.addEventListener('submit', function(e) {
        e.preventDefault();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'carlosromero1204@gmail.com', // Your email address
        pass: '' // Your email password or an App Password if you use 2-factor authentication
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'destination-email@example.com', // Replace with the destination email
        subject: 'Contact Form Submission',
        text: Name: ${name}\nEmail: ${email}\nMessage: ${message}
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
        // You can add code here to handle the form submission, e.g., sending an email or saving the inquiry to a database.
        // For this example, we'll just alert a message.
        alert('Your inquiry has been submitted. We will get back to you soon.');
        supportForm.reset();
    });
});
