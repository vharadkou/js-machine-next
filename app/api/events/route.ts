import { data } from './data';

export async function GET() {
  return Response.json(data);
}
