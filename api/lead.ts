import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const webhookUrl = process.env.VITE_BITRIX_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('CRM Webhook URL not configured in environment variables');
    return response.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { name, phone, tour, date, guests, children, contactMethod, comment } = request.body;

    const payload = {
      fields: {
        TITLE: `Заявка с сайта: ${tour}`,
        NAME: name,
        PHONE: [{ VALUE: phone, VALUE_TYPE: 'WORK' }],
        COMMENTS: `Дата: ${date}\nВзрослых: ${guests}\nДетей: ${children || 0}\nСвязь: ${contactMethod}\n\nКомментарий:\n${comment}`,
        SOURCE_ID: 'WEB',
        UTM_SOURCE: 'travelrusin.ru',
      },
      params: { REGISTER_SONET_EVENT: 'Y' }
    };

    const b24Response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!b24Response.ok) {
      const errorText = await b24Response.text();
      console.error('Bitrix24 Error:', errorText);
      throw new Error('Failed to send to CRM');
    }

    return response.status(200).json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return response.status(500).json({ error: 'Internal server error' });
  }
}
