"use client"
import React from "react";
import styles from './preco.module.css'
import Modal from "@/componets/modal";


export default function PrecoPage() {
    const [modal, setModal] = React.useState(false);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);
    return (
        <section className={styles.preco} id="preco">
            <div>
                <h2 className="titulo">Adquira sua pagina</h2>
                <p>
                    Aumente suas vendas e transforme seu negócio com nossas soluções personalizadas. <br/>Clique agora
                    mesmo
                    no botão abaixa e adquira já sua landpage!
                </p>
            </div>
            <div className={styles.preco}>

                <div className={styles.valor}>
                    <span className={styles.sifrao}>R$</span>
                    <h1>119</h1>
                    <span className={styles.centavo}>,99</span>
                    <span className={styles.pagamento}>Pagamento uníco</span>
                    <a onClick={openModal}
                       className={`${styles.btnAt} btnComprar`}>
                        Comprar agora
                    </a>
                </div>

            </div>
            {modal && <Modal isOpen={modal} onClose={closeModal}/>}

        </section>
    )
}