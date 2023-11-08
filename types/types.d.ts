export type ClienteType = {
    _id: string,
    cedula: number,
    first_name: string,
    last_name: string,
    phone: number,
    address: string,
    email: string
}

export type MedicinaType = {
    _id: string,
    name: string,
    price: number,
    stock: number,
    type: string,
    components?: Array<string>,
    description?: string
}

export type ProductoType = {
    _id: string,
    name: string,
    price: number,
    stock: number,
    type: string,
    description?: string
}