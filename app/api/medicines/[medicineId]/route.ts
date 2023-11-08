import { NextResponse, NextRequest } from "next/server";
import clienteMongo from '@/lib/mongodb'
import { ObjectId } from "mongodb";

async function connectDatabase() {
  const mongo = await clienteMongo
  return mongo.db(process.env.DATABASE_NAME)
}

// Obterner Medicina por el id
export async function GET(req: NextRequest, { params }: { params: { medicineId: string } }) {
  try{
    const db = await connectDatabase()
    const cliente = await db.collection("medicinas").findOne({_id: new ObjectId(params.medicineId)})
    
    return await NextResponse.json(cliente, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

// Actualizar Medicina por el id
export async function PUT(req: NextRequest, { params }: { params: { medicineId: string } }) {
  try {
    const clienteParams = await req.json()
    const db = await connectDatabase()
    const cliente = await db.collection("medicinas").updateOne({_id: new ObjectId(params.medicineId)},
    {
      $set: clienteParams
    })

    return await NextResponse.json(cliente, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

// Borrar Medicina por el id
export async function DELETE(req: NextRequest, { params }: { params: { medicineId: string } }) {
  try {
    const db = await connectDatabase()
    const cliente = await db.collection("medicinas").deleteOne({_id: new ObjectId(params.medicineId)})

    return await NextResponse.json(cliente, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
}
  