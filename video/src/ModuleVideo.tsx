import { AbsoluteFill, Sequence, Audio, staticFile, useVideoConfig } from "remotion";
import { moduleById, type Slide } from "../../src/data/modules";
import { slideFrames } from "./timing";

// Vertical (1080x1920) module video. Each slide is a Sequence.
// Narration audio: plays video/public/audio/<moduleId>-<i>.mp3 if present
// (generated via npm run tts:prerender); otherwise silent + subtitles.
export const ModuleVideo: React.FC<{ moduleId: string }> = ({ moduleId }) => {
  const mod = moduleById(moduleId);
  if (!mod) return <AbsoluteFill style={{ background: "#05080d" }} />;
  let from = 0;
  return (
    <AbsoluteFill style={{ background: "#05080d", fontFamily: "system-ui, sans-serif" }}>
      {mod.slides.map((s, i) => {
        const dur = slideFrames(s);
        const seq = (
          <Sequence key={i} from={from} durationInFrames={dur}>
            <SlideView slide={s} index={i} total={mod.slides.length} moduleId={moduleId} />
          </Sequence>
        );
        from += dur;
        return seq;
      })}
    </AbsoluteFill>
  );
};

const SlideView: React.FC<{
  slide: Slide;
  index: number;
  total: number;
  moduleId: string;
}> = ({ slide, index, total, moduleId }) => {
  useVideoConfig();
  const audio = `audio/${moduleId}-${index}.mp3`;
  return (
    <AbsoluteFill style={{ padding: 80, color: "#f2f4fb", justifyContent: "center" }}>
      <TryAudio src={audio} />
      <div style={{ fontFamily: "monospace", color: "#f5a623", fontSize: 34, letterSpacing: 2 }}>
        {moduleId} · {index + 1}/{total}
      </div>
      <h1 style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, margin: "24px 0 40px" }}>
        {slide.title}
      </h1>
      {slide.bullets && (
        <ul style={{ fontSize: 46, lineHeight: 1.5, paddingLeft: 40 }}>
          {slide.bullets.map((b, k) => (
            <li key={k} style={{ marginBottom: 20 }}>
              {b}
            </li>
          ))}
        </ul>
      )}
      {(slide.table || slide.rangeMatrix) && (
        <div style={{ fontSize: 40, color: "#9fa3c0", fontStyle: "italic" }}>
          [ Table/range — interactive in the app ]
        </div>
      )}
      {slide.ruleBox && (
        <div
          style={{
            marginTop: 40,
            borderLeft: "8px solid #f5a623",
            background: "#3a2e12",
            padding: "28px 32px",
            fontSize: 46,
            fontWeight: 600,
            borderRadius: 12,
          }}
        >
          📌 {slide.ruleBox}
        </div>
      )}
    </AbsoluteFill>
  );
};

// Wrapper so Remotion's render doesn't error if the mp3 is missing.
const TryAudio: React.FC<{ src: string }> = ({ src }) => {
  try {
    return <Audio src={staticFile(src)} />;
  } catch {
    return null;
  }
};
