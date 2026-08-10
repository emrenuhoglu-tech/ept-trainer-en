# EPT Trainer — project instructions
This repo turns Poker Pocket Book v5 (content/poker_pocket_book_v5.md) into a three-mode training app. This is the English build.

## Content rules (MOST IMPORTANT)
- NEVER rewrite or "improve" the poker content with your own GTO knowledge. All ranges, rules, and cases come verbatim from content/poker_pocket_book_v5.md. If it conflicts with general theory, THE DOCUMENT WINS — it is personally calibrated.
- In narration text, render the content into spoken language without changing it; use the second person ("you").
- Three concepts stay consistent across every module: "root error" (misclassifying one pair in a bloated pot), "board ownership", "stack mode first".
- Language is English; poker terms stay as-is (3-bet, check-raise, bluff-catcher, OOP/IP, flat).

## Tech
- React + Vite + Tailwind. No UI library, hand-write it. Mobile-first (390px), dark theme.
- API keys only in .env (ANTHROPIC_API_KEY, optional ELEVENLABS_API_KEY). Keep .env.example current.
- Anthropic calls go through server/proxy.mjs; never call the API directly from the client.
- Voice: the src/lib/speech.ts adapter. Default Web Speech (en-US), ElevenLabs if a key is set.
- Persistence is localStorage only. No auth (single user).

## Don't
- Edit anything under content/ (read-only source).
- Replace the range tables with "more accurate" values.
