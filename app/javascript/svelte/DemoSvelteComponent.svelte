<script>
  import {
    onMount
  } from 'svelte';

  export let argName;

  onMount(() => {
      if (argName == undefined) {
        argName = "General Kenobi"
      }
    })
</script>
<!--  -->
<h1 class="italic text-blue-700">Hello there, {argName}!</h1>
