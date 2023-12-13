<script lang="ts">
  import { secondary_option } from "../../../config/scheme";
  let textarea,
    show_result,
    show_result_text,
    isDanger = false;
  const schemeReg = /(cassava:\/\/web\/web)(\?.*)?$/;
  function parse_link() {
    let text = textarea?.value.trim();
    if (!text && schemeReg.test(text)) {
      showRes("不是有效链接", true);
      return;
    }
    const match = text.match(schemeReg);
    if (!match) {
      showRes("不是有效链接", true);
      return;
    }
    const cassavaPart = match[1];
    let queryPart: string = match[2] || "";
    let secondary_option_item;
    Object.keys(secondary_option).forEach((key) => {
      const res = secondary_option[key].find(
        (item) => item.value == cassavaPart,
      );
      if (res) {
        secondary_option_item = res;
      }
    });
    if (secondary_option_item) {
      secondary_option_item = `${secondary_option_item.value}[${secondary_option_item.label}]`;
    } else {
      secondary_option_item = ``;
    }

    if (queryPart) {
      let str = decodeURIComponent(queryPart).replace("?query=", "");
      let obj = JSON.parse(str);
      queryPart = "";
      for (let key in obj) {
        queryPart += `${key}:${obj[key]}<br/>`;
      }
    }

    showRes(
      `${decodeURIComponent(
        text,
      )}<br/>${secondary_option_item}<br/><br/><br/><br/>${queryPart}`,
      false,
    );
  }

  function showRes(text: string, danger: boolean) {
    show_result = true;
    show_result_text = text;
    isDanger = danger;
  }
</script>

<main>
  <button class="button is-fullwidth is-primary block" on:click={parse_link}
    >解析链接</button
  >
  {#if show_result}
    <div class="notification {isDanger && 'is-danger'}">
      <button class="delete" on:click={() => (show_result = false)}></button>
      {@html show_result_text}
    </div>
  {:else}
    <textarea
      class="textarea is-success block"
      placeholder="输入scheme链接"
      bind:this={textarea}
    ></textarea>
  {/if}
</main>
