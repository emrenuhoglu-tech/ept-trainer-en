import type { Slide } from "../../src/data/modules";

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

// Speech rate ~2.6 words/sec; each slide is at least 4 sec.
export function slideSeconds(slide: Slide): number {
  const words = (slide.narration || "").trim().split(/\s+/).length;
  return Math.max(4, Math.round(words / 2.6));
}
export function slideFrames(slide: Slide): number {
  return Math.round(slideSeconds(slide) * FPS);
}
