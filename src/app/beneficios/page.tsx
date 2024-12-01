import styles from './beneficios.module.css'
export default function BeneficiosPage() {
    return (
        <section className={styles.beneficios} id="beneficios">

                <h1>BENE<br/>FÍCIOS</h1>

            <div className={styles.listaBeneficio}>
                <ul>
                    <li>
                        Landpage Personalizada para seu nicho.
                    </li>
                    <li>
                        Alta conversão e captação de led.
                    </li>
                    <li>
                        Pagina responsivas que se adapta a qual quer tipo de tela.
                    </li>
                    <li>
                        Pagina com alta velocidade.
                    </li>
                    <li>
                        Headline persuasivas.
                    </li>


                </ul>
            </div>

        </section>
    )
}