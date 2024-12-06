import styles from './tecnologia.module.css'
import Image from "next/image";
export default function PageTecnologia() {
    return (
        <section className={styles.section}>
            <h2>TECNOLOGIAS</h2>

            <div className={styles.tecnologia}>
            <Image src="/img/js.png" alt="nexJS" width={200} height={200} />
            <Image src="/img/nexJs.png" alt="nexJS" width={200} height={200} />
            <Image src="/img/react.png" alt="nexJS" width={200} height={200} />
            <Image src="/img/laravel.png" alt="nexJS" width={200} height={200} />
            </div>



        </section>
    );
}