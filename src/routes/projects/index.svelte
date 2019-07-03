<script context="module">
	export function preload({ params, query }) {
		return this.fetch('projects.json')
		    .then(r => r.json());
	}
</script>

<script>
    export let hasMore;
	export let projects;
	let single;

    export function loadMore() {
      fetch(`projects.json?cursor=${hasMore}`)
        .then(r => r.json())
        .then(data => {
          projects = [...projects, ...data.projects];
          hasMore = data.hasMore;
        });
    }
</script>

<svelte:head>
  <title>Projects</title>
  <meta name="description" content="Genos is participating in numerous large international and bilateral industrial R&D projects. If you want to see the whole picture, include glycans in your study." />
  <meta name="author" content="Jaspero Ltd." />
</svelte:head>

<style>
.gg-projects-intro {
  padding: 200px 0 60px;
  background-image: url("/assets/images/section-projects.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>

<!--Projects intro-->
<section class="gg-projects-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">Projects<span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-project.svg" alt=""></span></h4>
    </div>
  </div>
</section>





<!--Projects-->
<section class="p-y-l">
  <div class="grid">
     {#each projects as project}
    <div class="col-6 col-s-12">
      <a class="gg-card h-full" rel="prefetch" href="projects/{project.url}">
        <p class="m-b-s fw-bold">{project.title}</p>
        <p class="m-b-s">{project.shortDescription}</p>
      </a>
    </div>
     {/each}
    <div class="col-12 ta-center">
      <button class="gg-button m-y-xs" disabled={!hasMore} on:click={loadMore}>Load more</button>
    </div>
  </div>
</section>
