export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Parse body if it is still a string (Vercel normally parses it, but some environments or clients may bypass it)
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      console.error('Failed to parse request body as JSON:', e);
      return res.status(400).json({ error: 'Invalid JSON request body.' });
    }
  }

  const { name, email, phone, company, subject, message, productType } = body || {};

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Required fields (name, email, phone) are missing.' });
  }

  // Load Resend configuration from Environment Variables
  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.RECIPIENT_EMAIL || 'shubkashyap806@gmail.com';
  const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

  // Demo fallback mode if RESEND_API_KEY is not configured
  if (!resendApiKey || resendApiKey === 're_your_api_key_here') {
    console.warn("Resend API Key is not configured in environment variables. Running in simulated demo mode.");
    console.log("Inquiry Data Received:", req.body);
    return res.status(200).json({ 
      success: true, 
      message: 'Inquiry simulated successfully! (Note: Paste your Resend API key in .env or configure it on Vercel to receive real emails)',
      simulated: true,
      data: req.body
    });
  }

  try {
    // Send email using Resend REST API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: `Kapoor Dyes Inquiry <${senderEmail}>`,
        to: recipientEmail,
        reply_to: email,
        subject: `[KDC Inquiry] ${subject || 'New Product Inquiry from ' + name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; border-top: 4px solid #F59F2E; padding: 20px; border-radius: 8px;">
            <h2 style="color: #0d2240; margin-bottom: 20px; font-weight: 800;">New Inquiry Received</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="background: #f9f9f9;"><td style="padding: 10px; font-weight: bold; width: 180px;">Name:</td><td style="padding: 10px;">${name}</td></tr>
              <tr><td style="padding: 10px; font-weight: bold;">Email:</td><td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr style="background: #f9f9f9;"><td style="padding: 10px; font-weight: bold;">Phone:</td><td style="padding: 10px;">${phone}</td></tr>
              <tr><td style="padding: 10px; font-weight: bold;">Company:</td><td style="padding: 10px;">${company || 'N/A'}</td></tr>
              <tr style="background: #f9f9f9;"><td style="padding: 10px; font-weight: bold;">Product Class:</td><td style="padding: 10px; color: #F59F2E; font-weight: bold;">${productType || 'General'}</td></tr>
              <tr><td style="padding: 10px; font-weight: bold;">Subject:</td><td style="padding: 10px;">${subject || 'General Inquiry'}</td></tr>
            </table>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 6px; border-left: 3px solid #ccc; margin-top: 15px;">
              <strong style="display: block; margin-bottom: 5px;">Message:</strong>
              <p style="margin: 0; white-space: pre-wrap;">${message || 'No message provided.'}</p>
            </div>
            <div style="margin-top: 25px; border-top: 1px solid #eee; padding-top: 15px; font-size: 10px; color: #888; text-align: center;">
              Sent automatically from Kapoor Dyes & Chemicals website inquiry system.
            </div>
          </div>
        `
      })
    });

    const result = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Your inquiry has been sent successfully!' });
    } else {
      console.error('Resend API Error details:', result);
      return res.status(response.status).json({ error: result.message || 'Resend service failed to transmit email.' });
    }
  } catch (error) {
    console.error('Resend API Transmission Failure:', error);
    return res.status(500).json({ error: `Resend service transmission failure: ${error.message}` });
  }
};
