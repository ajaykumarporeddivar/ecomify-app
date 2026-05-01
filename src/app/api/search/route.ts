import { Response, Request } from 'next';
import { MOCK_USERS, STORES, PRODUCTS } from '@/lib/data';

export async function GET(request: Request): Promise<Response> {
  const url = new URL.url);
  const q = url.searchParams.get('q');
  const type = url.searchParams.get('type');

  let results = [];

  if (q) {
    const searchQuery = q.toLowerCase();
    results = [...MOCK_USERS, ...STORES, ...PRODUCTS].filter((item) => {
      return (
        (item.name && item.name.toLowerCase().includes(searchQuery)) ||
        (item.email && item.email.toLowerCase().includes(searchQuery)) ||
        (item.description && item.description.toLowerCase().includes(searchQuery))
      );
    });
  } else {
    results = [...MOCK_USERS, ...STORES, ...PRODUCTS].slice(0, 5);
  }

  const data = {
    results: results.slice(0, 20),
    total: results.length,
    query: q,
  };

  return Response.json({ ok: true, data });
}