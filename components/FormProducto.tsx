'use client'

import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"
import { URL_API } from "@/config/envs"
import { toast } from "react-toastify";

export default function (clienteId? : string) {
    const [valores, setValues] = useState({
        name: '',
        price: '',
        stock: '',
        type: '',
        description: ''
    })

    const router = useRouter();

    const optionsType = [
        "Caja",
        "Paquete",
        "Individual"
    ]

    const addValues = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        //Envio a la API
        const respuesta = await fetch(`${URL_API}/api/medicines`, {
            method: 'POST',
            body: JSON.stringify({...valores})
        })

        if (respuesta.ok) {
            toast.success('Medicina creada correctamente')
        }else{
            toast.error('Ocurrio un error al intentar crear medicina')
        }

        router.push("/")
    }

    const inputManage = async (e: ChangeEvent<any>) => {
        const {name, value} = e.target
        setValues({...valores, [name]: value})
    }

    function loadData() {
        console.log(clienteId)
    }

    loadData()
    
    return (
        <div className="flex justify-center items-center">
            <form onSubmit={addValues}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                                <div className="mt-2">
                                    <input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required
                                    value={valores.name} onChange={inputManage}/>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Precio</label>
                                <div className="mt-2">
                                    <input type="number" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required
                                    value={valores.price} onChange={inputManage}/>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Cantidad</label>
                                <div className="mt-2">
                                    <input type="number" name="stock" id="stock" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required
                                    value={valores.stock} onChange={inputManage}/>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Tipo de venta</label>
                                <div className="mt-2">
                                    <select id="type" name="type" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" value={valores.type} onChange={inputManage}>
                                    { optionsType.map((value) => <option value={ value.toUpperCase() }>{ value }</option>) }
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Descripcion</label>
                                <div className="mt-2">
                                    <textarea id="description" name="description" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={valores.description} onChange={inputManage}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
                </div>
            </form>
        </div>
    )
}