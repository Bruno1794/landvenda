import styles from './Inicio.module.css'
import Link from "next/link";


export default function InicioPage() {
    return (
        <section className={styles.inicio} id="inicio">
            <div className={styles.headline}>
                <h2>Você está perdendo vendas por causa de páginas de venda mal feitas?</h2>
                <p>Descubra como uma página de venda bem elaborada pode transformar visitantes em clientes fiéis. </p>

                <Link href="https://lupistore2.pay.yampi.com.br/r/FJ27IPHQMA"
                      className='btnComprar' target='_blank'>
                    COMPRE AGORA
                </Link>
            </div>

            <div className={styles.imgPrincial}>
            </div>

        </section>


    );
}