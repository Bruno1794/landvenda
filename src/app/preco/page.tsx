import styles from './preco.module.css'
import Link from "next/link";

export default function PrecoPage() {
    return (
        <section className={styles.preco} id="preco">
            <div>
                <h2 className="titulo">Adquira sua pagina</h2>
                <p>
                    Aumente suas vendas e transforme seu negócio com nossas soluções personalizadas. <br/>Clique agora mesmo
                    no botão abaixa e adquira já sua landpage!
                </p>
            </div>
            <div className={styles.preco}>

                <div className={styles.valor}>
                    <span className={styles.sifrao}>R$</span>
                    <h1>59</h1>
                    <span className={styles.centavo}>,99</span>
                    <span className={styles.pagamento}>Pagamento uníco</span>
                    <Link href="https://lupistore2.pay.yampi.com.br/r/FJ27IPHQMA"
                       className={`${styles.btnAt} btnComprar` } target="_blank">
                        Comprar agora
                    </Link>
                </div >

            </div>

        </section>
    )
}