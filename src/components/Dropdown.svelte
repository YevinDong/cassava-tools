<script lang="ts">
  import { type IDropdownProps, type IDropdownPropsOptions } from "./type";
  import { createEventDispatcher } from "svelte";
  export let props: IDropdownProps;
  export let placeholder: string = "请选择";
  let now = {
    label: "",
    value: "",
  } as IDropdownPropsOptions;
  let dropdown_class = false;
  const dispatch = createEventDispatcher();
  $: {
    const res = props.options.find((item) => item.value === props.value);
    if (res) {
      now = res;
    } else {
      now = {
        label: "",
        value: "",
      };
    }
  }

  function dropdown_click() {
    dropdown_class = !dropdown_class;
  }

  function dropdownItem_click(e: Event, option: IDropdownPropsOptions) {
    e.stopPropagation();
    e.preventDefault();
    dropdown_click();
    now = option;
    dispatch("change", {
      ...now,
    });
  }
</script>

<main>
  <div
    class="dropdown {dropdown_class ? 'is-active' : ''}"
    on:click={dropdown_click}
    on:keydown={dropdown_click}
  >
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>{now.label || placeholder}</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        {#each props.options as option, index (index)}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-missing-attribute -->
          <a
            class="dropdown-item"
            on:click={(e) => dropdownItem_click(e, option)}>{option.label}</a
          >
          <!-- {#if index < props.options.length - 1}
            <hr class="dropdown-divider" />
          {/if} -->
        {/each}
      </div>
    </div>
  </div>
</main>
