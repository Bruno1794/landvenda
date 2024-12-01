import styles from './servicoes.module.css'
import Image from "next/image";

export default function ServicoesPage() {
    return (

            <section className={styles.servicos} id="servicos">
                <h2 className="titulo">Alguns Serviços</h2>
                <div className={styles.servicosGrid}>

                    <div>
                        <Image className={styles.img} src="/img/lp01.png" alt="lp01" width={493} height={280}/>
                    </div>
                    <div>
                        <Image  className={styles.img} src="/img/lp05.png" alt="lp02" width={493} height={280}/>

                    </div>
                    <div>
                        <Image  className={styles.img} src="/img/lp03.png" alt="lp03" width={493} height={280}/>

                    </div>
                    <div>
                        <Image  className={styles.img} src="/img/lp06.png" alt="lp04" width={493} height={280}/>

                    </div>
                    <div>
                        <Image  className={styles.img} src="/img/lp07.png" alt="lp07" width={493} height={280}/>

                    </div>
                    <div>
                        <Image  className={styles.img} src="/img/lp08.png" alt="lp08" width={493} height={280}/>

                    </div>

                </div>


            </section>

    )
}