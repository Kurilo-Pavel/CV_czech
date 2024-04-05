import express from "express";
import fs from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import nodemailer from "nodemailer";
import {USER, PASS, FrontendURL} from "./[locale]/constants.mjs";

const configNodeMailer = {
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  auth: {
    user: USER,
    pass: PASS
  }
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const server = express();
const port = 7780;

server.get("/downloadCV/:locale", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", `${FrontendURL}`);
  // const readStream = fs.createReadStream(path.join(__dirname, "CV.txt"))
  // readStream.pipe(response)
  // readStream.on("end", () => {
  //   console.log("finish")
  // })
  const locale= request.params.locale

  response.sendFile(__dirname+`/Kurilo_Pavel_${locale}.pdf`)
});

server.post("/message", express.json({type: "*/*"}), (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", `${FrontendURL}`);

  const userData = {email: request.body.email, login: request.body.login, message: request.body.message};

  const transporter = nodemailer.createTransport(configNodeMailer);
  const message = {
    from: "pkuryla@yandex.ru",
    to: "kurilo.pavel@mail.ru",
    subject: "Response to CV",
    html: `<div>
<b>User: </b><span>${userData.login}</span><br/>
<b>Email: </b><span>${userData.email}</span><br/>
<b>Message: </b><span>${userData.message}</span><br/>
</div>`
  };
  transporter.sendMail(message, err => {
    if (err) {
      response.status(401).send({message: "Sorry, the letter wasn't sent"});
    } else {
      response.send({message: `Thank you, your letter has been sent`});
    }
  });
});

server.listen(port, () => {
  console.log("server working...");
});