import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import { graphqlRequest } from './utils'

function cors(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve) => {
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
      origin: req.headers.origin,
    })(req, res, resolve)
  })
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if (process.env.NODE_ENV !== 'production') {
    await cors(req, res)
  }

  const response = await graphqlRequest(
    req
  )

  const jsonBody = await response.json().catch(console.error)
  res.status(response.status)
  res.send(jsonBody)
  res.end()
}
