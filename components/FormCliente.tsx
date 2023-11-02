//lista de clientes
'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
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

    const addClient = async (e:any) => {
        e.preventDefault()
        
        //Envio a la API
        const respuesta = await fetch(`${URL_API}/api/clients`, {
            method: 'POST',
            body: JSON.stringify({data: valores})
        })


        if (respuesta.ok) {
            toast.success('Cliente creado correctamente')
        }else{
            toast.error('Ocurrio un error al intentar crear cliente')
        }

        router.push("/")
    }

    const inputManage = async (e: any) => {
        const {name, value} = e.target
        setValues({...valores, [name]: value})
    }
    
    return (
        <div className="flex justify-center items-center">
            <form onSubmit={addClient}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="input-label">Nombre</label>
                        <input type="text" id="first_name" name="first_name" className="input-gray" placeholder="Nombre" required
                        value={valores.first_name} onChange={inputManage}/>
                    </div>
                    <div>
                        <label htmlFor="last_name" className="input-label">Apellido</label>
                        <input type="text" id="last_name" name="last_name" className="input-gray" placeholder="Apellido" required
                        value={valores.last_name} onChange={inputManage}/>
                    </div>
                    <div>
                        <label htmlFor="cedula" className="input-label">Cedula</label>
                        <input type="text" id="cedula" name="cedula" className="input-gray" placeholder="Cedula" required
                        value={valores.cedula} onChange={inputManage}/>
                    </div>  
                    <div>
                        <label htmlFor="phone" className="input-label">Numero de Telefono</label>
                        <input type="tel" id="phone" name="phone" className="input-gray" placeholder="123-45-678"
                        value={valores.phone} onChange={inputManage}/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="input-label">Email address</label>
                        <input type="email" id="email" name="email" className="input-gray" placeholder="usuario@correo.com" required
                        value={valores.email} onChange={inputManage}/>
                    </div>
                    <div>
                        <label htmlFor="address" className="input-label">Direccion</label>
                        <input type="text" id="address" name="address" className="input-gray" placeholder=""
                        value={valores.address} onChange={inputManage}/>
                    </div>
                </div>
                <button className="btn green-button" type='submit'>
                    Guardar cliente
                </button>
            </form>
        </div>
    )
}