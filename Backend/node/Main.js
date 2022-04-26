// Main backend file
// Side note I have a bunch of stuff commented out don't worrk about it
// I'll fix them up

// Needed imports
var express = require("express");
var app = express();
var http = require('http');
const path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

//vulnerability patching for security
app.disable('x-powered-by');

// Body Parsing
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cookies for security
var credentials = require('./components/credentials.js');
app.use(require('cookie-parser')(credentials.cookieSecret));

// Set backend port
app.set('PORT', process.env.PORT || 8080);

// Middleware
app.use(express.static(path.join('/var/www/html/build/')));
app.use(express.static(path.join('/home/afcplushies/finalDemo/frontend/src/public')))

// Render webpages
app.get('/', (req, res) => {
    res.sendFile(path.join('/var/www/html/build/index.html'));    
});

// Mailer section for contact page
app.post('/process', function(req, res){
    const mailer = require('nodemailer');
    const smtp = require('nodemailer-smtp-transport');
    async function mailjet() {
        const transporter = mailer.createTransport(
            smtp({
                host: 'in.mailjet.com',
                port: 2525,
                auth: {
                    user: process.env.MAILJET_API_KEY || 'a3c15b1909566b0dbc6e30a2d3d78d0e',
                    pass: process.env.MAILJET_API_SECRET || '1f74e556ce5062e8260466ef9d3a7479',
                },
            })
        )

        const json = await transporter.sendMail({
            from: req.body.email,
            to: 'afcplushies@gmail.com',
            subject: req.body.name,
            text: req.body.message,
        })
        /*transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                return console.log(error);
            }
                console.log('Message %s sent: %s', info.messageId, info.response);
                console.log(json);
            })*/
        console.log(json);
    }
    res.redirect(303, path.join('/var/www/html/build/index.html'));
    mailjet();
})

// Start listening on port 8080
app.listen(app.get('PORT'), function(){
    console.log('Server started on port: ' + app.get('PORT'));
})
