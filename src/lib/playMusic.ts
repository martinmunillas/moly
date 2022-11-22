import * as Tone from "tone";
import type { Music } from "./music";

const synth = new Tone.Synth().toDestination();

export const playMusic = (music?: Music, bpm = 120) => {
  if (music === null) return;
  let time = 0;
  for (const { notes, duration } of music) {
    const noteDuration = duration * (60 / bpm);
    for (const note of notes) {
      synth.triggerAttackRelease(note, noteDuration, Tone.now() + time);
    }
    time += noteDuration;
  }
};
