'use client'

import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"
import { URL_API } from "@/config/envs"
import { toast } from "react-toastify";

export default function () {
    const [valores, setValues] = useState({
        first_name: '',
        last_name: '',
        cedula: '',
        phone: '',
        email: '',
        address: ''
    })

    const router = useRouter();

    const addValues = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        //Envio a la API
        const respuesta = await fetch(`${URL_API}/api/clients`, {
            method: 'POST',
            body: JSON.stringify({...valores})
        })

        if (respuesta.ok) {
            toast.success('Cliente creado correctamente')
        }else{
            toast.error('Ocurrio un error al intentar crear cliente')
        }

        router.push("/clientes")
    }

    const inputManage = async (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setValues({...valores, [name]: value})
    }
    
    return (
        <div className="flex justify-center items-center">
            <form onSubmit={addValues}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                                <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">Nombres</label>
                                <div className="mt-2">
                                    <input type="text" name="first_name" id="first_name" className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required
                                    value={valores.first_name} onChange={inputManage}/>
                                </div>
                            </div>
                            
                            <div className="sm:col-span-3">
                                <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">Apellidos</label>
                                <div className="mt-2">
                                    <input type="text" name="last_name" id="last_name" className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required
                                    value={valores.last_name} onChange={inputManage}/>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="cedula" className="block text-sm font-medium leading-6 text-gray-900">Cedula</label>
                                <div className="mt-2">
                                    <input type="text" name="cedula" id="cedula" className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required
                                    value={valores.cedula} onChange={inputManage}/>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Telefono</label>
                                <div className="mt-2">
                                    <input type="text" name="phone" id="phone" className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required
                                    value={valores.phone} onChange={inputManage}/>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                <div className="mt-2">
                                    <input type="text" name="email" id="email" className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required
                                    value={valores.email} onChange={inputManage}/>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Direccion</label>
                                <div className="mt-2">
                                    <input type="text" name="address" id="email" className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required
                                    value={valores.address} onChange={inputManage}/>
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