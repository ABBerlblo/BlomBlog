const express = require('express')
const app = express()

const nodemailer = require("nodemailer")

const PORT = process.env.PORT || 5000

//middleware
app.use(express.static('pages'))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/contact.vue')
})

app.post('/', (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: gmail,
        auth: {
            user: "blombergblog@gmail.com",
            pass: "Password/01"
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'blombergblog@gmail.com',
        subject: 'Message from ${ req.body.email }: ${ req.body.subject }',
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.send('error')
        }
        else {
            console.log('Email sent:' + info.response)
            res.send('success')
        }
    })
})

app.listen(PORT), () => {
    console.log('Server running on port ' + { PORT })
}