<script lang="ts">
  import Router from "svelte-spa-router";
  import routes from "./router/index";
  import Navbar from "./components/Navbar.svelte";
</script>

<main class="content">
  <Navbar></Navbar>
  <div class="router_main">
    <Router {routes} />
  </div>
</main>

<style>
  .router_main {
    padding: 0;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }

    .router_main {
      padding: 2rem 1rem;
    }
  }
</style>
