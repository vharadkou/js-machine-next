import { NextApiRequest, NextApiResponse } from 'next';
import { Entities, getById } from '@jsm/data-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query as { id: string };
  const data = await getById(Entities.Events, id);
  res.status(200).json(data);
}
