import 'dotenv/config';
import path from 'path';

import express from 'express';
import OpenAI from 'openai';

export function main(): void {
  const app = express();
  const port = process.env.PORT || 3000;
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

  // JSON parser for API
  app.use(express.json());

  // Serve static assets from the assets directory
  app.use(express.static(path.join(__dirname, '../assets')));

  // Serve the main page
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/index.html'));
  });

  // Serve subject pages
  app.get('/subjects/:subject', (req, res) => {
    const subject = req.params.subject;
    res.sendFile(path.join(__dirname, `../assets/subjects/${subject}.html`));
  });

  // Study Features page
  app.get('/study-features', (_req, res) => {
    res.sendFile(path.join(__dirname, '../assets/study-features.html'));
  });

  // AI: Step-by-step solving endpoint
  app.post('/api/step-by-step', async (req, res) => {
    try {
      const query: unknown = req.body?.query;
      if (typeof query !== 'string' || !query.trim()) {
        return res.status(400).json({ error: 'Missing query' });
      }

      const prompt = `You are a High School math teacher and I am a student. Give me a step by step solution to ${query} using the divide slide technique.`;

      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: 'Server misconfigured: OPENAI_API_KEY not set' });
      }

      const openai = new OpenAI({ apiKey });
      const completion = await openai.chat.completions.create({
        model,
        messages: [
          { role: 'system', content: 'You are a helpful math tutor.' },
          { role: 'user', content: prompt },
        ]
      });

      const content = completion.choices?.[0]?.message?.content ?? '';
      return res.json({ content, model });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('[step-by-step] error:', msg);
      return res.status(500).json({ error: 'Failed to generate solution', detail: msg });
    }
  });

  app.listen(port, () => {
    console.log(`SynapseStudy server running at http://localhost:${port}`);
  });
}

if (require.main === module) {
  main();
}
