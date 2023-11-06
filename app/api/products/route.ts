import { NextResponse, NextRequest } from "next/server";
import clienteMongo from '@/lib/mongodb'

async function connectDatabase() {
  const mongo = await clienteMongo
  return mongo.db(process.env.DATABASE_NAME)
}

// Obterner todas las medicinas
export async function GET() {
    const db = await connectDatabase()
    const medicinas = await db.collection("productos").find({}).toArray();

    return await NextResponse.json(medicinas)
}

// Agregar nueva medicina
export async function POST(req: NextRequest) {
  try {
    const medicina = await req.json()
    const db = await connectDatabase()
    const collectionMedicinas = db.collection('productos');
    await collectionMedicinas.insertOne(medicina)

    return NextResponse.json({data: medicina}, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

export const config = {
    api: {
      externalResolver: true,
    },
  }
  