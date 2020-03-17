<script context="module">
	export function preload({ params, query }) {
		return this.fetch('publications.json')
		    .then(r => r.json());
	}
</script>

<script>
    export let hasMore;
	export let publications;

    export function loadMore() {
      fetch(`publications.json?cursor=${hasMore}`)
        .then(r => r.json())
        .then(data => {
          publications = [...publications, ...data.publications];
          hasMore = data.hasMore;
        });
    }
</script>

<style>
.gg-publications-intro {
  padding: 200px 0 60px;
  background-image: url("/assets/images/section-publications.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>

<svelte:head>
  <title>Publications | Genos Glyco</title>
  <meta name="description" content="Researchers in Genos participated in numerous clinical and epidemiological studies and published over 100 papers in leading journals" />
</svelte:head>

<!--Publications intro-->
<section class="gg-publications-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">
        Publications
        <span class="gg-icon" aria-hidden="true">
            <img src="assets/images/icon-publication.svg" alt="">
        </span>
      </h4>
    </div>
  </div>
</section>

<!--Publications-->
<section class="p-y-l bg-l-secondary">
  <div class="grid">
    <div class="col-12">
      <table class="gg-publications-table">
        <thead>
        <tr>
          <th>Year</th>
          <th>Title</th>
          <th>Reference</th>
          <th>Authors</th>
        </tr>
        </thead>
        <tbody>
        {#each publications as publication}
          <tr>
            <td data-label="Year">{publication.year}</td>
            <td data-label="Title">{publication.title}</td>
            <td data-label="Reference">
                {#if publication.link}
                <a class="link" href="{publication.link}" rel="noopener" target="_blank">{publication.description}</a>
                {:else}
                {publication.description}
                {/if}
            <td data-label="Authors">{publication.authors}</td>
          </tr>
        {/each}
        </tbody>
      </table>
    </div>
    <div class="col-12 ta-center">
      <button class="gg-button m-y-xs" disabled={!hasMore} on:click={loadMore}>Load more</button>
    </div>
  </div>
</section>
