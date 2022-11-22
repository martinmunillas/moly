import { CircularArray } from "./CircularArray";
import type { Music, Note, NoteName } from "./music";
import { scale, type ScaleMode } from "./scale";

const figures = [
  // { name: "whole", duration: 4 },
  // { name: "half", duration: 2 },
  { name: "quarter", duration: 1 },
  { name: "eighth", duration: 0.5 },
  { name: "sixteenth", duration: 0.25 },
];

const randomFigure = (timeLeft: number): number => {
  const available = figures.filter((f) => f.duration <= timeLeft);
  const index = Math.floor(Math.random() * available.length);
  return available[index].duration;
};

const randomNote = (scale: NoteName[]): Note => {
  const notes = Array(3)
    .fill(0)
    .map((_, i) => scale.map((n) => `${n}${i + 3}` as Note))
    .flat();
  const index = Math.floor(Math.random() * scale.length);
  return notes[index];
};

export type Melody = {
  music: Music;
  scaleMode: ScaleMode;
  tonic: NoteName;
  duration: number;
};

export const genMelody = (
  scaleMode: ScaleMode,
  tonic: NoteName,
  duration: number
): Melody => {
  let timeLeft = duration;
  const melody: Melody = { music: [], scaleMode, tonic, duration };
  const s = scale(tonic, scaleMode);
  while (timeLeft > 0) {
    const currentDuration = randomFigure(timeLeft);
    const note =
      timeLeft === duration ? (`${tonic}${4}` as Note) : randomNote(s);
    melody.music.push({ notes: [note], duration: currentDuration });
    timeLeft -= currentDuration;
  }
  return melody;
};
