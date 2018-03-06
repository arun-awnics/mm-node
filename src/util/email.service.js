/*
the service layer goes here(logics apart from CRUD methods)
*/
/*
var nodemailer = require('nodemailer');


exports.post = function(req, res) {
    // body of the mail for user
    const userOutput = `
            <h3>Greetings from mesomeds!</h3>
            <p>Thank you for subscribing to our newsletter. We will get in touch with you soon.</p>
            <p>Thank you and Regards,<br/>Mesomeds Team</p>
            `;

    // body of the mail for admin
    const adminOutput = `
                <p>Newsletter Request</p>
                <h3>Contact Details</h3>
                <ul>
                    <li>FullName: ${req.body.name}</li>
                    <li>Email ID: ${req.body.email}</li>
                    <li>Subject: ${req.body.subject}</li>
                </ul>
                <h3>Message</h3>
                <p>Message: ${req.body.comment}</p>
            `
    const email = req.body.email; // set email from body
    const subject = req.body.subject; // get subject from client

    //create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'test.arung@gmail.com',
            pass: 'passwordtest'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data for admin
    let adminMailOptions = {
        from: 'test.arung@gmail.com',
        to: 'test.arung@gmail.com',
        subject: subject,
        text: 'Hello to all',
        html: adminOutput
    };

    // setup email data for user
    let userMailOptions = {
        from: 'test.arung@gmail.com',
        to: email,
        subject: 'Thank you for subscribing to our newsletter',
        text: 'Hello to all',
        html: userOutput
    };

    // send mail to admin
    transporter.sendMail(adminMailOptions, function(error, info) {
        if (error) {
            console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.send('Email has been sent!'); // response after the mail is sent
    });

    // send mail to user
    transporter.sendMail(userMailOptions, function(error, info) {
        if (error) {
            console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    })
}*/