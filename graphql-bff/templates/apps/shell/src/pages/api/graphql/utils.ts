import type { NextApiRequest } from 'next'

export async function graphqlRequest(
  req: NextApiRequest,
): Promise<Response> {
  const BFF_URL = process.env.ZONE_BFF_SERVER_URL
  if (!BFF_URL) throw new Error(`Invalid Apollo Url: ${BFF_URL}`)

  const headers: any = {
    'content-type': 'application/json; charset=utf-8'
  }

  return fetch(BFF_URL, {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers
  })
}
