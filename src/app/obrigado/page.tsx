import styles from './obrigado.module.css'
import Footer from "@/componets/footer";
import Image from "next/image";

export default function PageObrigados() {
    return (
        <>
            <section className={styles.sectionObrigado}>

                <Image src="/img/logo.png" alt='logo' width={120} height={120} />
                <h1>entraremos em contato...</h1>
                <p>Code a Code desenvolvimentos</p>

            </section>
            <Footer/>
        </>


    )
}