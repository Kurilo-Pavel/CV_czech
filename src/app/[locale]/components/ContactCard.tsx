type ContactCardProps = {
  image: string;
  contact: string;
  link: string;
};

const ContactCard = ({contact, image, link}: ContactCardProps) => {
  return <a className="contact__card" href={link}>
    <img src={image + "_grey.png"} alt="icon_contact" className="contact__icon_visible"/>
    <img src={image + ".png"} alt="icon_contact" className="contact__icon_hidden"/>
    <span className="text_color">{contact}</span>
  </a>
};
export default ContactCard;