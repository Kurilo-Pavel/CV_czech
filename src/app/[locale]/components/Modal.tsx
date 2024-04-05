import "@/app/[locale]/styles/modal.css";
import Title from "@/app/[locale]/components/Title";
import Button from "@/app/[locale]/components/Button";

type ModalProps = {
  textModal: string;
  setIsModal: (value: boolean) => void;
};

const Modal = ({textModal, setIsModal}: ModalProps) => {
  return <div className="modal">
    <Title className="subTitle title_color" mainText={textModal}/>
    <Button text="OK" type="button" onClick={() => setIsModal(false)}/>
  </div>
};
export default Modal;