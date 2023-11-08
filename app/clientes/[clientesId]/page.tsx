export default function editarCliente({ params }: { params: {clientesId: string}}) {
    return (
        <h1>aqui se edita los clientes { params.clientesId }</h1>
    )
}