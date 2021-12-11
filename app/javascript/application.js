import DemoSvelteComponent from './svelte/DemoSvelteComponent.svelte'

window.addEventListener('load', () => {
  if (t = document.querySelector('[data-svelte-component="DemoSvelteComponent"]')) {
    const app = new DemoSvelteComponent({
      target: t
    });
  }
})
