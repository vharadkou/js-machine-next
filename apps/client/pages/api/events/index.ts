import { NextApiRequest, NextApiResponse } from 'next';
import { http, Response, Event, Entities } from '@jsm/data-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await http.get<Response<Event>>(
    `${process.env.CMS_PROXY}/api/${Entities.Events}?locale=ru&sort[0]=date:desc`
  );
  res.status(200).json(response.data);
}
