import { CircularArray } from "./CircularArray";

const _notes = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
] as const;

export { _notes as notes };

type NoteName = typeof _notes[number];
type Note = `${NoteName}${number}`;

const notes = new CircularArray(_notes);

export const scales = [
  "major",
  "minor",
  "dorian",
  "phrygian",
  "lydian",
  "mixolydian",
  "locrian",
] as const;

type ScaleMode = typeof scales[number];

const scaleDistribution: Record<ScaleMode, number[]> = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  locrian: [0, 1, 3, 5, 6, 8, 10],
};

export const scale = (tonic: NoteName, mode: ScaleMode): NoteName[] => {
  const tonixIndex = _notes.indexOf(tonic);
  return scaleDistribution[mode].map((i) => {
    return notes.get(i + tonixIndex);
  });
};

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

interface Step {
  note: Note;
  duration: number;
}

export type Melody = {
  notes: Step[];
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
  const melody: Melody = { notes: [], scaleMode, tonic, duration };
  const s = scale(tonic, scaleMode);
  while (timeLeft > 0) {
    const duration = randomFigure(timeLeft);
    const note =
      timeLeft === duration ? (`${tonic}${4}` as Note) : randomNote(s);
    melody.notes.push({ note, duration });
    timeLeft -= duration;
  }
  return melody;
};
