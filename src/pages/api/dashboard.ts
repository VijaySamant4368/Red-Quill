import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  res.status(200).json([
    { id: 1, title: "My first post" },
    { id: 2, title: "Another task" },
  ]);
}
