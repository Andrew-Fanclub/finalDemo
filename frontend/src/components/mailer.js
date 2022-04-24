/* app.post('/process', function(req, res){
    const mailer = require('nodemailer');
    const smtp = require('nodemailer-smtp-transprt');

    async function mailJet(){
        const transport = mailer.createTransport(
            smtp({
                host: 'in.mailjet.com',
                port: 2525,
                auth: {
                    user: process.env.MAILJET_API_KEY || 'insert key here',
                    pass: process.env.MAILJET_API_SECRET || 'insert key here',
                },
            })
        );
        const json = await transport.sendMail({
            from: 'afcplushies@gmail.com',
            to: 'afcplushies@gmail.com',
            subject: ,
            text: , 
        });
        console.log(json);
    }
    res.redirect(303, '/thankyou.html');
    mailJet();
});

This lowkey don't work because I forgot this is a server-side feature
This ain't gonna work for dev stage in the front-end section

import { Mailer } from 'nodemailer-react';

const transport = {
    host: 'afcplushies@gmail.com',
    secure: true,
    auth: {user: 'afcplushies@gmail.com', pass: 'af2plush!3$'},
}

const defaults = {
    from: ,
}

export const email = (email) => ({
    subject: ,
    body: (
        
    )
})

export const mailer = Mailer(
    { transport, defaults },
    { email }
)

mailer.send('email', {
    to: 'afcplushies@gmail.com'
}) */