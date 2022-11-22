<script lang="ts">
  import {
    genChordProgression,
    type Progression,
  } from "../lib/chordProgression";
  import { notes } from "../lib/music";
  import { playMusic } from "../lib/playMusic";
  import { scales } from "../lib/scale";
  let progressions: Progression[] = [];
  let bpm = 120;

  let progressionSelected = null;
  let scale = scales[0];
  let tonic = notes[0];
  const generate = () => {
    progressions.push(genChordProgression(tonic, scale));
    progressionSelected = progressions.length - 1;
    progressions = progressions;
  };
  const play = () => {
    playMusic(progressions[progressionSelected].music, bpm);
  };
  let setBpm = (e) => {
    bpm = e.target.value;
  };
  let setScale = (e) => {
    scale = e.target.value;
  };
  let setTonic = (e) => {
    tonic = e.target.value;
  };
</script>

<div>
  <label for="">Scale Mode</label>
  <select bind:value={scale} on:change={setScale}>
    {#each scales as scale}
      <option>{scale}</option>
    {/each}
  </select>

  <label for="">Tonic</label>
  <select bind:value={tonic} on:change={setTonic}>
    {#each notes as note}
      <option>{note}</option>
    {/each}
  </select>
  <button on:click={generate}>Generate progression</button>
</div>

<div>
  {#each progressions as progression, i}
    <p>{i + 1} {progression.tonic} {progression.scaleMode}</p>
  {/each}
</div>
<button on:click={play}>Play</button>
<input
  type="range"
  step="1"
  min="1"
  max="200"
  bind:value={bpm}
  on:change={setBpm}
/>
<p>BPM: {bpm}</p>
