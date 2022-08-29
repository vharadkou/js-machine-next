import { NextApiRequest, NextApiResponse } from 'next';
import { Entities, http } from '@jsm/data-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await http.get(`${process.env.PROXY}/api/${Entities.Digests}`);
  res.status(200).json(data);
}
