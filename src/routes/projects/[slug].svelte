<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`projects/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { project: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let project;
</script>

<svelte:head>
  <title>{project.title}</title>
  <meta name="description" content="{project.fullDescription}" />
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
      <h4 class="gg-title c-l-primary">Projects<span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-project.svg" alt="Projects icon"></span></h4>
    </div>
  </div>
</section>





<!--Project content-->
<section class="p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">{project.title}<a rel="prefetch" href="projects" class="gg-icon"><img src="assets/images/icon-nav-left.svg" alt="Go back" aria-label="Go back"></a></h4>
    </div>
    <div class="col-12">
      <div class="gg-post">
        <div class="gg-post-minor">
          {#if project.image}
            <img loading="lazy" class="m-b-s" src="{project.image}" alt="Project Image">
          {/if}
        </div>
        <div class="gg-post-major p-t-s gg-read-format">
	        {@html project.fullDescription}
        </div>
      </div>
    </div>
  </div>
</section>
