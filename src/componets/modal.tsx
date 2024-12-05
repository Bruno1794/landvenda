'use client';
import styles from './modal.module.css'
import {useFormStatus} from 'react-dom';
import postClient from "@/app/actions/post-client";
import React from "react";
import {redirect} from "next/navigation";
import mascaraTel from "@/functions/mascara-tel";
import {ledFacebookPixel} from "@/helper/facebookPixel";


type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

function FormButton() {
    const {pending} = useFormStatus();
    return (
        <>
            {pending ? (
                <button disabled={pending} className={`${styles.btForm} btnComprar`}>Redirecionando...</button>
            ) : (

                <button className={`${styles.btForm} btnComprar`}>Proximo</button>
            )}
        </>
    );
}

const Modal = ({isOpen, onClose}: ModalProps) => {
    const [phone, setPhone] = React.useState<string>('');

    const handeMasc = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhone = mascaraTel(e.target.value);
        setPhone(formattedPhone);
    }

    const [state, action] = React.useActionState(postClient, {
        ok: false,
        error: '',
        data: null
    });
    React.useEffect(() => {
        if (state.ok) {
            ledFacebookPixel('584971474016578');
            redirect('https://lupistore2.pay.yampi.com.br/r/FJ27IPHQMA');
        }
    }, [state.ok]);

    if (!isOpen) return null
    return (
        <div className={styles.modalOverlay} id="overflow">
            <div className={styles.modal} id="modal">
                <a id="fecharBtn" className={styles.btnFechar}
                   onClick={onClose}>X</a>

                <h1 className={styles.tituloModal}>Preenche os dados abaixo</h1>

                <form action={action} className={styles.form}>

                    <div className={styles.formGrup}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" required autoComplete="false" name="email" id="email" placeholder="Email"/>
                    </div>


                    <div className={styles.formGrup}>
                        <label htmlFor="whatsApp">WhatsApp</label>
                        <input
                            required
                            type="text"
                            autoComplete="false"
                            name="fone" id="fone"
                            value={phone}
                            onChange={handeMasc}
                            placeholder="WhatsApp"/>
                    </div>
                    <FormButton/>

                </form>

            </div>
        </div>
    );
};

export default Modal;