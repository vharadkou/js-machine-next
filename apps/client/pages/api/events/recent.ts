import { NextApiRequest, NextApiResponse } from 'next';
import { Entities, getRecent } from '@jsm/data-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getRecent(Entities.Events);
  res.status(200).json(data);
}
