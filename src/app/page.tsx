import "./globals.css";
import InicioPage from "@/app/inicio/page";
import Header from "@/componets/header";
import SobrePage from "@/app/sobre/page";
import BeneficiosPage from "@/app/beneficios/page";
import ServicoesPage from "@/app/servicos/page";
import PrecoPage from "@/app/preco/page";
import Footer from "@/componets/footer";
import PageTecnologia from "@/app/tecnologia/page";


export default function Home() {

  return (
    <>
        <Header/>
      <InicioPage/>
        <SobrePage/>
        <BeneficiosPage/>
        <PageTecnologia/>
        <ServicoesPage/>
        <PrecoPage/>
        <Footer/>

    </>
  );
}
