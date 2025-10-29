// app/api/gallery/route.js
export const runtime = 'nodejs';

import albums from '@/app/data/gallery.json';

export async function GET() {
  return new Response(JSON.stringify({ albums }), {
    headers: { 'content-type': 'application/json' },
  });
}
