'use client'
import styles from './Inicio.module.css'
import Modal from "@/componets/modal";
import React, {useState} from "react";

export default function InicioPage() {
    const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);


    return (
        <section className={styles.inicio} id="inicio">
            <div className={styles.headline}>
                <h2>Você está perdendo vendas por causa de páginas de venda mal feitas?</h2>
                <p>Descubra como uma página de venda bem elaborada pode transformar visitantes em clientes fiéis. </p>

                <a onClick={openModal}
                   className='btnComprar'>
                    SAIBA MAIS
                </a>
            </div>

            <div className={styles.imgPrincial}>
            </div>
            {modal && <Modal isOpen={modal} onClose={closeModal}/>}

        </section>


    );
}