<script>
	import IntersectionObserver from '$lib/IntersectionObserver.svelte';
</script>

<div style="height: 100vh"></div>

<IntersectionObserver let:intersecting top={-100} bottom={-100}>
  <div class="{intersecting ? 'yes' : 'no'}">Intersection</div>
</IntersectionObserver>

<style>
  .yes {
    background: blue;
  }
  .no {
    background: red;
  }
</style>