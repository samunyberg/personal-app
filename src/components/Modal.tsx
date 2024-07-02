import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={styles.container} onClick={onClose}></div>
      <div className={styles.content}>{children}</div>
    </>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
