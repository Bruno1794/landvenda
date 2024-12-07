'use client';
import React from "react";
import styles from './clientes.module.css'
import getClient, {TypeClient} from "@/app/actions/get-client";
import ListaCleinte from "@/componets/clientes/ListaCleinte";

export default function PageClientes() {
    const [data, setData] = React.useState<TypeClient[]>([]);

    React.useEffect(() => {
        async function listaCliente() {
            const {clients} = await getClient();
            setData(clients);
        }

        listaCliente();
    }, [])

    return (
        <section className={styles.sectionClientes}>
            <h1>Clientes</h1>
            <br/>
            <ul>
                <ListaCleinte data={data}/>
            </ul>
        </section>
    );
}