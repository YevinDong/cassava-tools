<script lang="ts">
  import Layout from "../components/Layout.svelte";
  import MakeLink from "./components/makeLink/index.svelte";
  import ParseLink from "./components/parseLink/index.svelte";
  let tabIndex = 0;
</script>

<Layout>
  <section class="hero is-info">
    <div class="hero-body">
      <p class="title">App Scheme</p>
      <p class="subtitle">生成/解析App的Scheme链接</p>
    </div>
  </section>
  <div class="box">
    <div class="tabs">
      <ul>
        <li class={tabIndex == 0 ? "is-active" : ""}>
          <a
            on:click|preventDefault|stopPropagation|self={() => (tabIndex = 0)}
            href="/">生成链接</a
          >
        </li>
        <li class={tabIndex == 1 ? "is-active" : ""}>
          <a
            on:click|preventDefault|stopPropagation|self={() => (tabIndex = 1)}
            href="/">解析链接</a
          >
        </li>
      </ul>
    </div>
    {#if tabIndex === 0}
      <MakeLink />
    {:else}
      <ParseLink />
    {/if}
  </div>
</Layout>

<style lang="scss">
</style>
