# SCANIMINT
AI-Powered Resume Analysis & Career Assistance Platform.

## Five core tools
1. AI Resume Analyzer
2. AI Resume Builder
3. LinkedIn/GitHub → Resume
4. Auto-Tailor Engine
5. Smart Job Matcher

## Stack
Next.js + TypeScript + Gemini + Supabase + Vercel.

## Run
1. Copy `.env.example` to `.env.local`.
2. Add `GOOGLE_API_KEY` (server-side only).
3. Add Supabase URL + anon key if using database/auth.
4. `npm install`
5. `npm run dev`

## Deploy
Push to GitHub, import the repository into Vercel, then add the same environment variables in Vercel. Never commit API keys.

## Supabase
Run `supabase/schema.sql` in the Supabase SQL editor.

## Important
LinkedIn data is not fabricated. If automated profile access is unavailable, use manual details. GitHub public repositories are fetched through the public API.
