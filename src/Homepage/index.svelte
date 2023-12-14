<script lang="ts">
  import { push } from "svelte-spa-router";
  import Layout from "../components/Layout.svelte";
</script>

<main>
  <Layout>
    <div class="columns is-multiline">
      <div class="column">
        <button
          class="button is-fullwidth is-info block"
          on:click={() => push("/scheme")}
          >Scheme&nbsp;&nbsp;&nbsp;
          <span class="icon">
            <i class="fas fa-tv"></i>
          </span>
        </button>
        <button
          class="button is-fullwidth is-success block"
          on:click={() => push("/time")}
          >Time&nbsp;&nbsp;&nbsp;
          <span class="icon">
            <i class="far fa-clock"></i>
          </span>
        </button>
      </div>
    </div>
  </Layout>
</main>
