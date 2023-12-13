<script lang="ts">
  import { push } from "svelte-spa-router";
  import Layout from "../components/Layout.svelte";
</script>

<main>
  <Layout>
    <div class="columns is-multiline">
      <div class="column">
        <button
          class="button is-fullwidth is-info"
          on:click={() => push("/scheme")}
          >Scheme&nbsp;&nbsp;&nbsp;
          <span class="icon">
            <i class="fas fa-tv"></i>
          </span>
        </button>
      </div>
    </div>
  </Layout>
</main>
