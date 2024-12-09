import React from "react";
import Link from "next/link";
import styles from './layout.module.css'
import Image from "next/image";

export default function LayoutPage({children}: { children: React.ReactNode }) {
    return (
        <div className={styles.saidbar}>

            <div className={styles.menu}>
                <Link href="/painel">
                    <Image src="/img/logo.png" alt="logo" width={80} height={80} className={styles.imagem}/>
                </Link>

                <ul>
                    <li><Link href="/painel" >Dasborhad</Link></li>
                    <li><Link href="/painel/clientes">Leads</Link></li>
                    <li><Link href="/painel/clientes">Clientes</Link></li>
                </ul>
            </div>

            <div>
                {children}
            </div>


        </div>
    )
}