<script lang="ts">
  import Dropdown from "../../../components/Dropdown.svelte";
  import {
    type IDropdownPropsOptions,
    type IDropdownPropsOptionsWithParams,
  } from "../../../components/type";
  import { empty_option } from "../../helper";
  import {
    secondary_option,
    primary_option,
    commonParams,
  } from "../../../config/scheme";

  let primary_value = {} as IDropdownPropsOptions;
  let secondary_value = {} as IDropdownPropsOptionsWithParams;
  let local_secondary_option = empty_option;
  let show_result = false;
  let show_result_text = "";
  let sub_params: Element[] = [];
  $: {
    const item_config: IDropdownPropsOptions[] | undefined =
      secondary_option[primary_value.value];
    if (item_config) {
      local_secondary_option.value = "";
      local_secondary_option.options = JSON.parse(JSON.stringify(item_config));
    }
  }

  function reset() {
    secondary_value = {} as IDropdownPropsOptionsWithParams;
    sub_params = [];
  }

  function type_dropdown_change(e: CustomEvent) {
    reset();
    primary_value = e.detail || {};
  }
  function sub_dropdown_change(e: CustomEvent) {
    reset();
    secondary_value = e.detail || {};
  }
  function make_link() {
    const keys = Object.keys(sub_params);
    const size = keys.length;
    const query = `?query=`;
    const base_str = secondary_value.value.toString();
    let param = {};
    let str = ``;
    if (size) {
      keys.forEach((key) => {
        const el = sub_params[key] || {};
        const value = el.value;
        if (value) {
          param[key] = value;
        }
      });
      if (Object.keys(param).length) {
        str = JSON.stringify(param);
      }
    }
    if (str) {
      show_result_text = base_str + query + encodeURIComponent(str);
    } else {
      show_result_text = base_str;
    }
    show_result = true;
  }
</script>

<main>
  <div class="columns">
    <div class="column is-full">
      <button
        class="button is-fullwidth is-primary"
        on:click={make_link}
        disabled={!secondary_value.value && !primary_value.value}
        >生成链接</button
      >
    </div>
  </div>
  {#if show_result}
    <div class="notification">
      <button class="delete" on:click={() => (show_result = false)}></button>
      {show_result_text}
    </div>
  {:else}
    <div class="columns">
      <div class="column is-one-quarter">
        <Dropdown
          props={primary_option}
          on:change={type_dropdown_change}
          placeholder="请选择类型"
        ></Dropdown>
      </div>
      {#if local_secondary_option.options.length}
        <div class="column is-one-quarter">
          <Dropdown
            props={local_secondary_option}
            placeholder="请选择子类型"
            on:change={sub_dropdown_change}
          ></Dropdown>
        </div>
      {/if}
    </div>
    {#if secondary_value.params && secondary_value.params.length}
      {#each secondary_value.params.concat(commonParams) as param}
        <div class="field">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label">{param.key}</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              bind:this={sub_params[param.key]}
            />
          </div>
          {#if param.info}
            <p class="help">{param.info}</p>
          {/if}
        </div>
      {/each}
    {/if}
  {/if}
</main>
