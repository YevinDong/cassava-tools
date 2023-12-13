<script lang="ts">
  import { fly } from "svelte/transition";
</script>

<main>
  <div
    in:fly={{ x: 1200, duration: 300, delay: 300 }}
    out:fly={{ x: -1200, duration: 300 }}
  >
    <slot />
  </div>
</main>