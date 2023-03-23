import { NextApiRequest, NextApiResponse } from 'next';
import { Entities, http, Response, Event } from '@jsm/data-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await http.get<Response<Event>>(
    `${process.env.CMS_API}/api/${Entities.Events}?locale=ru&sort[0]=date:desc&pagination[limit]=4`
  );

  res.status(200).json(response.data);
}
