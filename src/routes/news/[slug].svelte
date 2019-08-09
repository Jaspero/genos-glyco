<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`news/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { news: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let news;
</script>

<svelte:head>
  <title>{news.title}</title>
  <meta name="description" content="{news.content}" />
</svelte:head>


<style>
.gg-news-intro {
  padding: 200px 0 60px;
  background-image: url("/assets/images/section-news.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>

<!--Single news intro-->
<section class="gg-news-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">News<span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-news.svg" alt=""></span></h4>
    </div>
  </div>
</section>


<!--Single news content-->
<section class="p-y-l">
  <div class="grid">
    <div class="col-12">
      <div class="gg-post">
        <div class="gg-post-minor">
            <p class="fw-bold p-t-s m-b-s">{news.title}</p>
            <p class="fs-small c-d-secondary">{news.publicationDate}</p>
            {#if news.image}
            <img loading="lazy" class="m-y-s" src="{news.image}" alt="News Image">
            {/if}
        </div>
        <div class="gg-post-major p-t-s gg-read-format">
	        {@html news.content}
        </div>
      </div>
    </div>
  </div>
</section>
