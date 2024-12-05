'use client'
import styles from "./header.module.css";
import Image from "next/image";
import React from "react";




export default function Header() {

    React.useEffect(() => {
        import("react-facebook-pixel")
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init("584971474016578"); //don't forget to change this
                ReactPixel.pageView();
            });
    }, []);
    return (
        <header className={styles.header}>
            <Image src="/img/logo.png" alt="Logo" width={80} height={80}/>
            <p className={styles.menuResponsivo}></p>
            <ul className={styles.menu}>
                <li><a href="#inicio"  className="active">Inicio</a></li>
                <li><a href="#sobre" >Sobre</a></li>
                <li><a href="#beneficios" >Beneficios</a></li>
                <li><a href="#servicos" >Serviços</a></li>
                <li><a href="#preco" >Preço</a></li>
            </ul>
        </header>
    )
}