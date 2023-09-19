import React from "react";
import { ReactDOM } from "react";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop}>props.children</div>
};

const ModalOverlay = (props) => {
  return <div className={styles.modalOverlay}>
    <div>props.children</div>
  </div>
};

const portalElement = document.getElementById("overlays")

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
    </React.Fragment>
)};

export default Modal;
