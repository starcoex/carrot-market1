import client from "@/libs/client";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "starcoex@naver.com",
      name: "KoJungHoon",
      phone: 1066921359,
    },
  });

  response.status(200).json({ ok: true });
}
