<script lang="ts">
  import { genMelody, type Melody } from "../lib/melody";
  import { notes } from "../lib/music";
  import { playMusic } from "../lib/playMusic";
  import { scales } from "../lib/scale";
  let melodies: Melody[] = [];
  let bpm = 120;
  let selectedMelody = null;
  let scale = scales[0];
  let tonic = notes[0];
  const generate = () => {
    melodies.push(genMelody(scale, tonic, 8));
    selectedMelody = melodies.length - 1;
    melodies = melodies;
  };

  const play = () => {
    playMusic(melodies[selectedMelody].music, bpm);
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
  <button on:click={generate}>Generate melody</button>
</div>

<div>
  {#each melodies as melody, i}
    <p>{i + 1} {melody.tonic} {melody.scaleMode}</p>
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
