import { SUPABASE_URL, SUPABASE_KEY } from './supabase.js';

export async function saveSearch(apod) {

  try {

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/apod_history`,
      {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          search_date: apod.date,
          title: apod.title,
          media_type: apod.media_type
        })
      }
    );

    console.log('Status:', response.status);

    const result = await response.text();

    console.log('Resposta Supabase:', result);

  } catch (error) {

    console.error('Erro completo:', error);

  }
}
