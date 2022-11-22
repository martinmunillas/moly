<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import GenMelody from "./components/GenMelody.svelte";
  import Home from "./components/Home.svelte";
  import GenChordProgression from "./components/GenChordProgression.svelte";
</script>

<main>
  <Router>
    <Route path="/" component={Home} />
    <Route path="/gen/melody" component={GenMelody} />
    <Route path="/gen/chord-progressions" component={GenChordProgression} />
  </Router>
</main>

<style>
</style>
