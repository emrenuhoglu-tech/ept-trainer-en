import type { Slide } from "../../src/data/modules";

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

// Konuşma hızı ~2.6 kelime/sn; her slayt en az 4 sn.
export function slideSeconds(slide: Slide): number {
  const words = (slide.narration || "").trim().split(/\s+/).length;
  return Math.max(4, Math.round(words / 2.6));
}
export function slideFrames(slide: Slide): number {
  return Math.round(slideSeconds(slide) * FPS);
}
