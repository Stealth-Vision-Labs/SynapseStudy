# Configuration

Create a `.env` file from `.env.example` and set values for local development.

Common variables

- APP_ENV=development
- LOG_LEVEL=INFO

OpenAI variables

- OPENAI_API_KEY=your_key_here
- OPENAI_MODEL=gpt-4o-mini

Notes

- OPENAI_MODEL is configurable. Use any available Chat Completions model your account supports.
- If you intend to target a newer model (e.g., "gpt-5" when available), set `OPENAI_MODEL` accordingly.

Never commit real secrets; use local `.env` only.
