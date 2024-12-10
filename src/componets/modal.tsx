'use client';
import styles from './modal.module.css'
import {useFormStatus} from 'react-dom';
import postClient from "@/app/actions/post-client";
import React from "react";
import {redirect} from "next/navigation";
import mascaraTel from "@/functions/mascara-tel";



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
               import("react-facebook-pixel")
                   .then((x) => x.default)
                   .then((ReactPixel) => {
                       ReactPixel.init("584971474016578"); //don't forget to change this
                       ReactPixel.track('Lead', {
                           content_name: 'Formulário de Contato Enviado',
                       });
                   });

               redirect('/obrigado');

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
                    <p className={styles.erro}>{state.error}</p>
                    <FormButton/>


                </form>

            </div>
        </div>
    );
};

export default Modal;