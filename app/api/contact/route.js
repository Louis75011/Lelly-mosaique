export const runtime = 'edge';

function bad(msg, code = 400) {
  return new Response(JSON.stringify({ ok:false, error: msg }), {
    status: code, headers: { 'content-type':'application/json' }
  });
}

export async function POST(req) {
  try {
    const { name, email, subject, message, company } = await req.json();
    if (company) return bad('Spam');                  // honeypot
    if (!name || !email || !message) return bad('Champs requis manquants.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad('Email invalide.');

    const payload = {
      sender: { email: process.env.BREVO_SENDER_EMAIL, name: process.env.BREVO_SENDER_NAME || 'Site' },
      to: [{ email: process.env.BREVO_TO_EMAIL }],
      replyTo: { email, name },
      subject: `Contact — ${subject?.trim() || 'Sans objet'}`,
      htmlContent: `
        <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g,'<br/>')}</p>
      `,
    };

    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!r.ok) return bad(`Brevo: ${await r.text() || r.status}`, 502);
    return new Response(JSON.stringify({ ok:true }), { headers:{'content-type':'application/json'} });
  } catch (e) {
    return bad('Erreur serveur.', 500);
  }
}

function escapeHtml(s=''){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
