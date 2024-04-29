import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import nodemailer from "nodemailer";
import {USER, PASS, FrontendURL} from "../[locale]/constants.mjs";

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
  const locale = request.params.locale;

  response.sendFile(__dirname + `/Kurilo_Pavel_${locale}.pdf`);
});

server.post("/message/:locale", express.json({type: "*/*"}), (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", `${FrontendURL}`);

  const locale = request.params.locale;
  let error, text;
  switch (locale) {
    case "en":
      error = "Sorry, the letter wasn't sent";
      text = "Thank you, your letter has been sent";
      break;
    case "ch":
      error = "Omlouváme se, dopis nebyl odeslán";
      text = "Děkuji, váš dopis byl odeslán";
      break;
    case "de":
      error = "Entschuldigung, der Brief wurde nicht gesendet";
      text = "Vielen Dank, Ihr Brief wurde gesendet";
      break;
  }
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
      response.status(401).send({message: error});
    } else {
      response.send({message: text});
    }
  });
});

server.listen(port, () => {
  console.log("server working...");
});