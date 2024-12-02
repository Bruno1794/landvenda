import React from 'react';
import styles from './modal.module.css'

const Modal = () => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <a href="" className={styles.btnFechar}>X</a>

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