import { NextApiRequest, NextApiResponse } from 'next';
import { Entities, get } from '@jsm/data-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await get(Entities.Events);
  res.status(200).json(data);
}
