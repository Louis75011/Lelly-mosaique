// app/api/contact/route.js

export const runtime = 'edge';

export async function POST() {
  return new Response(
    JSON.stringify({ ok: true }),
    { headers: { 'content-type': 'application/json' } }
  );
}
