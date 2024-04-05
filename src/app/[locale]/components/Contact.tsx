"use client"
import "@/app/[locale]/styles/contact.css";
import {
  Field, Form, Formik
} from "formik";
import Title from "@/app/[locale]/components/Title";
import ContactCard from "@/app/[locale]/components/ContactCard";
import {emailCheck, loginCheck, messageCheck} from "@/app/[locale]/script.mjs";
import {Url} from "@/app/[locale]/constants.mjs";
import Button from "@/app/[locale]/components/Button";
import Input from "@/app/[locale]/components/Input";
import TextArea from "@/app/[locale]/components/TextArea";
import {useState} from "react";
import Modal from "@/app/[locale]/components/Modal";
import {useLocale, useTranslations} from "next-intl";

interface FormValues {
  login: string;
  email: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact = () => {
  const menu = useTranslations("Menu");
  const contact = useTranslations("Contact");
  const locale = useLocale();
  const initialValues: FormValues = {
    login: "",
    email: "",
    message: ""
  };
  const [isLogin, setIsLogin] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [textModal, setTextModal] = useState("");

  return <div className="section contact__section" data-value="Contact">
    <Title className="title title_color" mainText={menu("contact")}/>
    <div className="contact__content">
      <div className="contact__column">
        <ContactCard image="/icons/message" contact="kurilo.pavel8@gmail.com" link="mailto:kurilo.pavel8@gmail.com"/>
        <ContactCard image="/icons/phone" contact="+375 29 7839712" link="tel:+375297839712"/>
        <ContactCard image="/icons/telegram" contact="it_pavel_k" link="https://t.me/it_pavel_k"/>
      </div>
      <div className="contact__column">
        <Title
          className="subTitle title_color title_column"
          mainText={contact("sectionMainTitle")}
          subText={contact("sectionSubTitle")}
        />
        <Formik
          initialValues={initialValues}
          validate={async (values: FormValues) => {
            const errors: FormErrors = {};
            if (!emailCheck(values.email)) {
              errors.email = contact("errorEmail");
            }
            if (values.login) {
              setIsLogin(true);
            } else {
              setIsLogin(false);
            }
            if (!loginCheck(values.login)) {
              errors.login = contact("errorLogin");
            }
            if (values.email) {
              setIsEmail(true);
            } else {
              setIsEmail(false);
            }
            if (!messageCheck(values.message)) {
              errors.message = contact("errorMessage");
            }
            if (values.message) {
              setIsMessage(true);
            } else {
              setIsMessage(false);
            }
            return errors;
          }}
          onSubmit={async (values: FormValues) => {

            const response = await fetch(Url + "/message/"+locale, {
              method: "POST",
              body: JSON.stringify(values)
            });
            const data = await response.json();
            if (data) {
              setIsModal(true);
              setTextModal(data.message);
            }
          }}>
          {({errors, touched}) => {
            return (
              <Form className="contact__callBack">
                <Field
                  name="login"
                  component={Input}
                  type="text"
                  placeholder={contact("login")}
                  className="contact__login"
                  isTitle={isLogin}
                  error={touched.login ? errors.login : undefined}
                />
                <Field
                  name="email"
                  component={Input}
                  type="text"
                  placeholder="Email"
                  className="contact__email"
                  isTitle={isEmail}
                  error={touched.email ? errors.email : undefined}
                />
                <Field
                  name="message"
                  component={TextArea}
                  placeholder={contact("message")}
                  className="contact__message"
                  isTitle={isMessage}
                  error={touched.message ? errors.message : undefined}
                />
                <Button type="submit" text={contact("button")} className="contact__button"/>
              </Form>)
          }}
        </Formik>
      </div>
    </div>
    {isModal && <Modal setIsModal={setIsModal} textModal={textModal}/>}
  </div>
};
export default Contact;