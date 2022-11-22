import type { Music, NoteName } from "./music";
import type { ScaleMode } from "./scale";

export interface Progression {
  tonic: NoteName;
  scaleMode: ScaleMode;
  duration: number;
  music: Music;
  progression: NoteName[];
}

export const genChordProgression = (
  tonic: NoteName,
  scaleMode: ScaleMode
): Progression => {
  const progression = [tonic, tonic, tonic, tonic];
  return {
    tonic,
    scaleMode,
    duration: 4,
    music: [],
    progression,
  };
};
