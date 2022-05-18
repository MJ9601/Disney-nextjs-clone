import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  session
    ? res.send({
        content: "This is protected content. you can access this values",
      })
    : res.send({ error: "You must be sign in to view the content" });
};
