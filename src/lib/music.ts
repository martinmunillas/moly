import { CircularArray, type CircularArrayItem } from "./CircularArray";

export const notes = new CircularArray([
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
] as const);

export type NoteName = CircularArrayItem<typeof notes>;
export type Note = `${NoteName}${number}`;

interface Step {
  duration: number;
  notes: Note[];
}

export type Music = Step[];
