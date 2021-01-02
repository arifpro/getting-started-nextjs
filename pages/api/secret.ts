import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const KEY_TOKEN = "alskdjflakjdflasdfjk";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { token } = req.body

    const { admin } = jwt.verify(token, KEY_TOKEN) as { [key: string]: boolean }

    if (admin) {
        res.json({ secretAdminCode: 12345 })
    } else {
        res.json({ admin: false })
    }
}
