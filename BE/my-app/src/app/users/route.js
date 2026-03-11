import clientPromise from "../../lib/mongodb";

export async function GET() {
    const client= await clientPromise
    const db=client.db("dbTest1")
    const users=await db.collection("User").find().toArray()
    return Response.json(users)
}