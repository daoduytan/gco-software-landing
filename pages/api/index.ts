import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await db.read();

    res.json(db.data);
  } catch (error) {
    console.log(error);
  }
}
