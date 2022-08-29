import { NextApiRequest, NextApiResponse } from 'next';
import { http, Entities } from '@jsm/data-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const data = await http.get(
    `${process.env.PROXY}/api/${Entities.Digests}/${id}`
  );
  res.status(200).json(data);
}
