import { URL_API } from "@/config/envs"
import Cliente from "@/components/Cliente"
import { ClienteType } from "@/types/types"

async function getData() {
    const res = await fetch(`${URL_API}/api/clients`, { next: { revalidate: 10 /* seconds , cache: 'no-store'*/} })
    const data = await res.json()
    /*if (!res.ok) {
        console.log(res.status(data.error.status).json({message: data.error}))
    }*/

    return data
}

export default async function clientesList() {
    const data = await getData()
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            { data.map((cliente: ClienteType) => (
                <Cliente key={Number(cliente._id)} {...cliente} />
            ))}
        </div>
    )
}