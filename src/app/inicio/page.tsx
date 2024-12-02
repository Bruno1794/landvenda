'use client'
import styles from './Inicio.module.css'
import Modal from "@/componets/modal";
import React, {useState} from "react";

/*href="https://lupistore2.pay.yampi.com.br/r/FJ27IPHQMA"*/



export default function InicioPage() {
    const [modal, setModal] = useState(false);
    function handleClick(e: React.MouseEvent<EventTarget>) {
        e.preventDefault()
        setModal(true);

    }

    return (
        <section className={styles.inicio} id="inicio">
            <div className={styles.headline}>
                <h2>Você está perdendo vendas por causa de páginas de venda mal feitas?</h2>
                <p>Descubra como uma página de venda bem elaborada pode transformar visitantes em clientes fiéis. </p>

                <a onClick={handleClick}
                   className='btnComprar'>
                    COMPRE AGORA
                </a>
            </div>

            <div className={styles.imgPrincial}>
            </div>
            {modal && <Modal/>}

        </section>


    );
}