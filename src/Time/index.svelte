<script lang="ts">
  import Layout from "../components/Layout.svelte";
  import dayjs from "dayjs";
  import utc from "dayjs/plugin/utc";
  import { onMount } from "svelte";
  dayjs.extend(utc);

  let time = Date.now();
  let active_index = 0;
  const config = {
    zone: [8, 0, 1],
  };
  function inputChange(e) {
    console.log(e.target.value);
  }
  function format(
    t: number,
    offset: number,
    format_string: string = "YYYY-MM-DD HH:mm:ss",
  ) {
    return dayjs(t).utcOffset(config.zone[offset]).format(format_string);
  }
  function updateTime() {
    time = Date.now();
  }
  function getUTCZone(active_index: number) {
    return `UTC+${config.zone[active_index]}`;
  }
  function copy(e: Event) {
    if (e.target) {
      const el: EventTarget = e.target;
      if (el instanceof HTMLElement) {
        const node_list = el.childNodes;
        let res = ``;
        Array.from(node_list).forEach((item) => {
          if (item.nodeName == "#text") {
            res += item.textContent;
          }
        });
        navigator.clipboard.writeText(res);
      }
    }
  }
  onMount(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  });
</script>

<Layout>
  <section class="hero is-info">
    <div class="hero-body">
      <p class="title">Time</p>
      <p class="subtitle">查看本地时间/UTC时间/非洲时间</p>
      <p class="subtitle">(点击可复制)</p>
    </div>
  </section>
  <nav class="panel">
    <!-- <div class="panel-block">
      <p class="control has-icons-left" style="margin-bottom: 0;">
        <input
          class="input"
          type="text"
          placeholder="输入时间戳"
          on:change={inputChange}
        />
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
      <p class="control has-icons-left">
        <input
          class="input"
          type="datetime-local"
          placeholder="输入时间戳"
          on:change={inputChange}
        />
        <span class="icon is-left">
          <i class="far fa-clock"></i>
        </span>
      </p>
    </div>
    <div class="panel-block">
      <button class="button is-link is-outlined is-fullwidth"> Reset </button>
    </div> -->
    <p class="panel-tabs">
      <a
        class={active_index === 0 ? "is-active" : ""}
        on:click|preventDefault={() => {
          active_index = 0;
        }}
        href="/">Local时间</a
      >
      <a
        class={active_index === 1 ? "is-active" : ""}
        on:click|preventDefault={() => {
          active_index = 1;
        }}
        href="/">UTC时间</a
      >
      <a
        class={active_index === 2 ? "is-active" : ""}
        on:click|preventDefault={() => {
          active_index = 2;
        }}
        href="/">Africa时间</a
      >
    </p>
    <a class="panel-block" on:click|preventDefault={copy} href="/">
      <span class="panel-icon">
        <i class="fas fa-stopwatch-20"></i>
      </span>
      {getUTCZone(active_index)}
    </a>
    <a class="panel-block" on:click|preventDefault={copy} href="/">
      <span class="panel-icon">
        <i class="fas fa-stopwatch-20"></i>
      </span>
      {format(time, active_index, "YYYY年MM月DD日 HH:mm:ss")}
    </a>
    <a class="panel-block" on:click|preventDefault={copy} href="/">
      <span class="panel-icon">
        <i class="fas fa-stopwatch-20"></i>
      </span>
      {dayjs(time).toISOString()}
    </a>
    <a class="panel-block" on:click|preventDefault={copy} href="/">
      <span class="panel-icon">
        <i class="fas fa-stopwatch-20"></i>
      </span>
      {dayjs(time).toString()}
    </a>
    <a class="panel-block" on:click|preventDefault={copy} href="/">
      <span class="panel-icon">
        <i class="fas fa-stopwatch-20"></i>
      </span>
      {new Date(time).getTime()}
    </a>
  </nav>
</Layout>

<style>
</style>
