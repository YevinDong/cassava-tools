<script lang="ts">
  import { fly } from "svelte/transition";
</script>

<main>
  <div
    in:fly={{ x: 1400, duration: 200, delay: 200 }}
    out:fly={{ x: -1400, duration: 200 }}
  >
    <slot />
  </div>
</main>