'use client';
import React from "react";
import {redirect} from "next/navigation";

import styles from './captura.module.css';
import Footer from "@/componets/footer";
import Image from "next/image";

import postClient from "@/app/actions/post-client";
import mascaraTel from "@/functions/mascara-tel";


export default function CapturaPgae() {
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
        import("react-facebook-pixel")
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init("584971474016578"); //don't forget to change this
                ReactPixel.pageView();
            });
    }, []);

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
    return (
        <>
            <section className={styles.captura}>
                <Image src="/img/logo.png" alt="logo" width={100} height={100}/>
                <h1>Desenvolvemos paginas de vendas!</h1>
                <p>páginas de qualidade e alta performance.</p>
                <p className={styles.whatsapp}>Informe seu whatsapp abaixo para mais informações</p>

                <form action={action} className={styles.form}>
                    <input type="text" placeholder="(99)99999-999" onChange={handeMasc} value={phone} name="fone" id="fone"/>
                    <button className={styles.btnForm}>-</button>
                </form>
                <p className={styles.erro}>{state.error}</p>

            </section>
            <Footer/>
        </>

    );
}