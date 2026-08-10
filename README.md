# EPT Trainer

A single-user, mobile-first web app that turns Poker Pocket Book v5 into a multi-mode training tool. Target: EPT Barcelona, 16 August 2026. (English build — see the Turkish edition for the original.)

- **Lessons** — 9 modules, slides + spoken coach narration (auto-advance, speed control, HD voice)
- **Quiz** — Range / Scenario / Run (offline, from the book)
- **Drill / Table** — Socratic live coach + hand simulator (Claude)
- **Progress** — scorecard + spaced repetition, review, decision journal
- **Reference** — Range Guide, Bet Types, Question Bank, 15 Sentences, Equity

All poker content comes from `content/poker_pocket_book_v5.md` (the single source of truth). Details: `CLAUDE.md`, `PROJECT_BRIEF.md`.

## Setup

```bash
npm install
cp .env.example .env      # then fill in .env (see below)
```

`.env` (all optional; Lessons + Quick Reference need none):

| Variable | What for |
|---|---|
| `ANTHROPIC_API_KEY` | **Drill Mode** (required). Model calls go through the proxy. |
| `ANTHROPIC_MODEL` | Default `claude-fable-5`. |
| `ANTHROPIC_FALLBACK_MODEL` | Default `claude-opus-4-8` (on refusal/error). |
| `OPENAI_API_KEY` | **HD voice** (optional, `gpt-4o-mini-tts`). Falls back to Web Speech. |
| `ELEVENLABS_API_KEY` + `ELEVENLABS_VOICE_ID` | HD voice alternative. |

## Running

Phase 1 (Lessons + Reference) is enough on its own:

```bash
npm run dev
```

For Drill and HD voice, use **two terminals**:

```bash
npm run server    # proxy (Drill + TTS), :8787 — reads .env
npm run dev        # app, :5173 — routes /api to the proxy
```

From a phone: same Wi-Fi as the PC, `http://<pc-ip>:5173` (`host:true` is on).

## Model

Drill Mode uses **`claude-fable-5` for everything**; on a refusal or error it falls back to **`claude-opus-4-8`** (inside the proxy). Configurable via `.env`. Fable 5 is a premium model ($10/$50 per 1M tokens); KITAP is cached on every request (cache_control) so the repeated portion is priced at ~0.1×.

## Voice

- **Web Speech (default):** browser, en-US, free. Poker terms (3-bet, bluff-catcher…) are corrected by the pronunciation dictionary in `src/lib/speech.ts`.
- **HD voice:** the "🔊 HD" button in the Lesson player. OpenAI/ElevenLabs via the proxy; mp3 is cached in IndexedDB per module+slide (repeat listens don't hit the API). If no key is set, it silently falls back to Web Speech.

## Video (Remotion — optional, Phase 3)

Renders each module to a vertical (1080×1920) mp4. Separate sub-package (doesn't bloat the main app):

```bash
cd video
npm install
# (optional) generate narration audio — while 'npm run server' runs in the main project:
npm run tts:prerender
npm run render:module -- M5     # out/M5.mp4
npm run studio                  # preview
```

If audio isn't pre-generated, the video renders silent + subtitled. Table/range slides show an "interactive in the app" placeholder in the video.

## Structure

```
content/          poker_pocket_book_v5.md (source, single truth), karne_seed.json
server/proxy.mjs  Drill + Sim (Anthropic) + TTS proxy; the key lives here, never leaks to the client
src/
  data/           modules.ts (9 modules + narration), kitap_summary.ts, karne_seed.ts, events.ts
  content/        curriculum.ts (MD parser)
  lib/            speech.ts (Web + HD voice), storage.ts, karne.ts, drillClient.ts, simClient.ts
  prompts/        drill_system.md · sim_system.md
  components/     DataTable.tsx · RangeGrid.tsx · Cards.tsx
  modes/          lessons/ · quiz/ · drill/ · sim/ · progress/ · reference/ · leak/ · autopsy/ · cornerman/
video/            Remotion project (optional)
```

## Content rule

Poker content (ranges, rules, cases) comes verbatim from `content/poker_pocket_book_v5.md`. If it conflicts with GTO, the document wins — it's personally calibrated. `content/` is read-only.
