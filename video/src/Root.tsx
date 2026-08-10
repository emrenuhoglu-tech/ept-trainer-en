import { Composition } from "remotion";
import { modules } from "../../src/data/modules";
import { ModuleVideo } from "./ModuleVideo";
import { FPS, WIDTH, HEIGHT, slideFrames } from "./timing";

// Her modül kendi kompozisyonu (id = M1..M7).
// npm run render:module -- M5  →  M5 kompozisyonunu render eder.
export const RemotionRoot: React.FC = () => (
  <>
    {modules.map((m) => {
      const total = m.slides.reduce((a, s) => a + slideFrames(s), 0);
      return (
        <Composition
          key={m.id}
          id={m.id}
          component={ModuleVideo}
          durationInFrames={total}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
          defaultProps={{ moduleId: m.id }}
        />
      );
    })}
  </>
);
