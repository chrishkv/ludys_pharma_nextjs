import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='grid h-screen place-items-center'>
      <h1 className="text-3xl font-bold underline text-red-600 self-center">
        No Encontrado
      </h1>
      <Link href="/">
        <button className="primary-button" type='button'>
            Regresar
        </button>
      </Link>
    </div>
  )
}