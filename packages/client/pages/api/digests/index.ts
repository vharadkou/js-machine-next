import { NextApiRequest, NextApiResponse } from 'next';
import { Entities, http, Response, Digest } from '@jsm/data-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await http.get<Response<Digest>>(
    `${process.env.CMS_API}/api/${Entities.Digests}?locale=ru&sort[0]=date:desc&pagination[pageSize]=100`
  );
  res.status(200).json(response.data);
}
