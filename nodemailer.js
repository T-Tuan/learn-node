const nodemailer = require("nodemailer")

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount()

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "2937570410@qq.com", // generated ethereal user
      pass: "mbraetdpdzvzdcjg", // generated ethereal password
    },
  })

  // transporter.verify(function (error, success) {
  //   if (error) {
  //     console.log(error)
  //   } else {
  //     console.log("Server is ready to take our messages")
  //   }
  // })
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"👻" <2937570410@qq.com>', // sender address
    to: "429461542@qq.com", // list of receivers
    subject: "腾讯送福利！", // Subject line
    text: "", // plain text body
    html: "<h1>森林就是大**</h1>", // html body
  })

  console.log("Message sent: %s", info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


setInterval(main,1000*10)


// let transporter = nodemailer.createTransport({
//   host: "smtp.qq.com",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: "2937570410@qq.com", // generated ethereal user
//     pass: "mbraetdpdzvzdcjg", // generated ethereal password
//   },
// })

// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log("Server is ready to take our messages")
//   }
// })
