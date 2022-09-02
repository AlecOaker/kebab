import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onHideCart}></div>;
};
const ModalWindow = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    const portalElement = document.getElementById("overlays");

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onHideCart={props.onHideCart} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalWindow>{props.children}</ModalWindow>,
                portalElement
            )}
        </>
    );
};

export default Modal;
