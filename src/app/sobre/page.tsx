import styles from './sobre.module.css'
import Image from "next/image";

export default function SobrePage() {
    return (
        <section className={styles.sobre} id="sobre">
            <div>
                <Image src="/img/programacao.jpg" alt="programcao" width={640} height={600} sizes="80vh"
                       className={styles.imgSobre}/>
            </div>

            <div className={styles.conteudoSobre}>
                <h2 className="titulo">Sobre</h2>
                <p>Nós somos especialistas em desenvolver sistemas e páginas de venda que não apenas atraem, mas também
                    convertem. Nossas páginas são elaboradas com estratégias eficazes de copywriting e design atrativo,
                    garantindo que cada visitante sinta-se compelido a realizar a compra.
                </p>
                <br/>

                <p>Nossas páginas de venda são projetadas para capturar a atenção do seu público-alvo e converter
                    visitantes em clientes fiéis. Utilizamos técnicas avançadas de persuasão para garantir que cada
                    palavra conte.
                </p>
                <br/>
                <p>
                    Com nossa abordagem focada no usuário, cada página é fácil de navegar, garantindo que seus
                    potenciais
                    clientes encontrem o que precisam rapidamente. Isso se traduz em taxas de conversão mais altas e
                    menos abandonos.
                </p>
                <br/>
                <p>
                    Deixe as complicações do desenvolvimento conosco! Nossa equipe especializada cuida de tudo,
                    permitindo que você se concentre no crescimento do seu negócio. Com um sistema confiável e páginas
                    eficazes, o sucesso está ao seu alcance.
                </p>
                <br/>

            </div>
        </section>
    )
}