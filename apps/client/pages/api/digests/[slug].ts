import { NextApiRequest, NextApiResponse } from 'next';
import {
  http,
  Response,
  Digest,
  SlugEntity,
  mapSlugData,
} from '@jsm/data-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;
  const response = await http.get<Response<SlugEntity<Digest>>>(
    `${process.env.CMS_API}/api/slugify/slugs/digest/${slug}`
  );

  res.status(200).json(mapSlugData(response.data));
}
