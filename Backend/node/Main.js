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
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded);
app.use(bodyParser.json());

//cookies for security
var credentials = require('./components/credentials.js');
app.use(require('cookie-parser')(credentials.cookieSecret()));

// Set backend port
app.set('PORT', process.env.PORT);

// Middleware
app.use(express.static(path.join(__dirname, "~/frontend/build")));

// Render webpages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));    
});

// Mailer section for contact page
app.post('/process?contactUs', function(req, res){
    let transporter = nodemailer.createTransport({
        host: "gmail",
        port: 'PORT',
        secure: true,
        auth: {
            user: 'afcplushies@gmail.com',
            pass: 'af2plush!3$',
        }
    })

    let mailOptions = {
        to: 'afcplushies@gmail.com',
        subject: req.body.name + req.body.email,
        text: req.body.message
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return console.log(error);
        }
            console.log('Message %s sent: %s', info.messageId, info.response);
        })

    res.writeHead(301, { Location: 'index.html' })
    res.end();
})

// Start listening on port 8080
app.listen(app.get('PORT'), function(){
    console.log('Server started on port: ' + app.get('PORT'));
})
