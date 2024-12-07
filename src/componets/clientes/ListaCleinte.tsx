import {TypeClient} from "@/app/actions/get-client";


export default function ListaCleinte({data}: { data: [] | TypeClient[] }) {

    return (
        <>
            {data?.map((item: TypeClient) => (
                <>
                    <li key={item.id}>{item.email} - {item.fone}</li>

                    <hr/>
                </>


            ))}


        </>
    );
}