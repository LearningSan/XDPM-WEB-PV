import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
    const { id } = await params

  const client = await clientPromise;
  const db = client.db("dbTest1");

  let queryId;

  if (ObjectId.isValid(id)) {
    queryId = new ObjectId(id);
  } else {
    queryId = Number(id);
  }

  const user = await db.collection("User").findOne({
    _id: queryId,
  });

  return Response.json(user);
}