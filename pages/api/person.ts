// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req.body)

  // console.log(req.query)
  // http://localhost:3000/api/person?name=khan
  // { name: 'khan' }

  res.statusCode = 200
  res.json({
    name: 'Arif',
    age: 21,
    num: Math.floor(Math.random() * 30)
  })

  // res.send('asdjflaksdjf')
  // res.setHeader('Set-Cookie', 'programmer=true;')
  // res.end('Hello, how are you?')
}
