export const runtime = 'edge';

export async function GET() {
  const res = await fetch(
    new URL('/data/gallery.json', import.meta.url)
  );
  const albums = await res.json();

  return new Response(JSON.stringify({ albums }), {
    headers: { 'content-type': 'application/json' },
  });
}
