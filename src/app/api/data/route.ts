import { Response, Request } from 'next';
import { MOCK_USERS, STATS, STORES, PRODUCTS } from '@/lib/data';

export async function GET(): Promise<Response> {
  const entityName = 'users';
  const data = { [entityName]: MOCK_USERS, stats: STATS, total: MOCK_USERS.length };

  return new Response(JSON.stringify({ ok: true, data }), {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
}

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();
  return Response.json({
    ok: true,
    message: 'Demo mode — data not persisted',
    received: body,
  });
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}