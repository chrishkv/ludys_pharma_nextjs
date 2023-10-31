//lista de clientes
'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function () {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [cedula, setCedula] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const router = useRouter();

    const manejarEnvio = (e:any) => {
        e.preventDefault()
        console.log("manejo envio")
        router.push("/")
    }
    
    return (
        <div className="flex justify-center items-center">
            <form onSubmit={manejarEnvio}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="input-label">Nombre</label>
                        <input type="text" id="first_name" className="input-gray" placeholder="Nombre" required
                        value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="last_name" className="input-label">Apellido</label>
                        <input type="text" id="last_name" className="input-gray" placeholder="Apellido" required
                        value={last_name} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="cedula" className="input-label">Cedula</label>
                        <input type="text" id="cedula" className="input-gray" placeholder="Cedula" required
                        value={cedula} onChange={(e) => setCedula(e.target.value)}/>
                    </div>  
                    <div>
                        <label htmlFor="phone" className="input-label">Numero de Telefono</label>
                        <input type="tel" id="phone" className="input-gray" placeholder="123-45-678"
                        value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="input-label">Email address</label>
                        <input type="email" id="email" className="input-gray" placeholder="usuario@correo.com" required
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="address" className="input-label">Direccion</label>
                        <input type="text" id="address" className="input-gray" placeholder="" required
                        value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                </div>
                <button className="primary-button" type='submit'>
                    Guardar cliente
                </button>   
            </form>
        </div>
    )
}