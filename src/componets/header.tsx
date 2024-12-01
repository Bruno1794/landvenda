'use client'
import styles from "./Header.module.css";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Header() {


    return (
        <header className={styles.header}>
            <Image src="/img/logo.png" alt="Logo" width={80} height={80}/>
            <p className={styles.menuResponsivo}></p>
            <ul className={styles.menu}>
                <li><Link href=""  className="active">Inicio</Link></li>
                <li><Link href="" >Sobre</Link></li>
                <li><Link href="" >Beneficios</Link></li>
                <li><Link href="" >Serviços</Link></li>
                <li><Link href="" >Preço</Link></li>
            </ul>
        </header>
    )
}