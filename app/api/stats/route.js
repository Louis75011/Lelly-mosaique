export async function GET() { const s = { since: 1980, albums: 4, categories: 9 }; return new Response(JSON.stringify(s), { headers: { 'content-type': 'application/json' } }) }
