import { notes, type NoteName } from "./music";

export const scales = [
  "major",
  "minor",
  "dorian",
  "phrygian",
  "lydian",
  "mixolydian",
  "locrian",
] as const;

export type ScaleMode = typeof scales[number];

export const scaleDistribution: Record<ScaleMode, number[]> = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  locrian: [0, 1, 3, 5, 6, 8, 10],
};

export const scale = (tonic: NoteName, mode: ScaleMode): NoteName[] => {
  const tonixIndex = notes.indexOf(tonic);
  return scaleDistribution[mode].map((i) => {
    return notes.get(i + tonixIndex);
  });
};
