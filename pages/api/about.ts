import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await db.read();
    switch (req.method) {
      case "GET":
        res.json(db.data?.about);
        break;

      case "POST":
        const { title, description, item } = req.body;

        console.log(db.data);
        (db.data as any) = db.data || {
          about: { title: "", desciption: "", items: [] },
        };

        if (title) (db.data as any).about.title = title;
        if (description) (db.data as any).about.description = description;
        if (item) (db.data as any).about.items.push(item);

        db.write();

        res.end(`ok`);
        break;

      default:
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.log(error);
  }
}
