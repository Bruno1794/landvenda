import React from 'react';
import styles from './modal.module.css'

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
}
const Modal = ({isOpen, onClose}: ModalProps) => {

    if (!isOpen) return null
    return (
        <div className={styles.modalOverlay} id="overflow">
            <div className={styles.modal} id="modal">
                <a id="fecharBtn" className={styles.btnFechar}
                   onClick={onClose}>X</a>

                <h1 className={styles.tituloModal}>Preenche os dados abaixo</h1>

                <form action="" className={styles.form}>

                    <div className={styles.formGrup}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" autoComplete="false" name="email" id="email" placeholder="Email"/>
                    </div>


                    <div className={styles.formGrup}>
                        <label htmlFor="whatsApp">WhatsApp</label>
                        <input type="text" autoComplete="false" name="whatsApp" id="whatsApp" placeholder="WhatsApp"/>
                    </div>
                    <button className={`${styles.btForm} btnComprar`}>Proximo</button>
                </form>

            </div>
        </div>
    );
};

export default Modal;