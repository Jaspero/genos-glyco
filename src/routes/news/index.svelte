<script context="module">
	export function preload({ params, query }) {
		return this.fetch('news.json')
		    .then(r => r.json());
	}
</script>

<script>
    export let hasMore;
	export let news;
    export let active = 0;

    let twitter;
    let twitterLoaded = false;

    export function loadMore() {
      fetch(`news.json?cursor=${hasMore}`)
        .then(r => r.json())
        .then(data => {
          news = [...news, ...data.news];
          hasMore = data.hasMore;
        });
    }

    async function changeTab(value) {
      if (active === value) {
        return;
      }

      active = value;

      if (value === 1 && !twitterLoaded) {
        twitterLoaded = true;
        twttr.widgets.load(twitter);
      }
    }

</script>

<style>
.gg-news-intro {
  padding: 200px 0 60px;
  background-image: url("/assets/images/section-news.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.hidden {
  display: none;
}
</style>

<svelte:head>
	<title>News</title>
</svelte:head>

<!--News intro-->
<section class="gg-news-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">News<span class="gg-icon"><img src="assets/images/icon-news.svg" aria-hidden="true"></span></h4>
    </div>
  </div>
</section>





<!--News-->
<section class="p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">Latest in glyco science</h4>
    </div>
    <div class="col-12">
      <div class="gg-tabs">
        <div class="gg-tabs-selection">
          <div class="gg-tabs-buttons">
            <button class="gg-tabs-button" class:active="{active === 0}" on:click="{() => changeTab(0)}">Our posts</button>
            <button class="gg-tabs-button" class:active="{active === 1}" on:click="{() => changeTab(1)}">Twitter feed</button>
          </div>
        </div>
        <div class="gg-tabs-content" class:twitter-hidden="{active !== 1}">
            <!--Our posts-->
            <div class="grid" class:hidden="{active === 1}">
              {#each news as single}
              <div class="col-12">
                <a class="gg-card h-full" rel="prefetch" href="/news/{single.url}">
                  <p class="fs-small m-b-xs m-t-s">{single.publicationDate}</p>
                  <p class="m-b-s fw-bold">{single.title}</p>
                  <p class="m-b-s">{single.subTitle}</p>
                </a>
              </div>
              {/each}
              <div class="col-12 ta-center">
                <button class="gg-button m-y-xs" disabled={!hasMore} on:click={loadMore}>Load more</button>
              </div>
            </div>
            <!--Twitter-feed-->
            <a bind:this={twitter} class:hidden="{active === 0}" class="twitter-timeline" data-dnt="true" data-theme="light" href="https://twitter.com/gglycoscience?lang=en">
              Tweets by GlycomeGenos
            </a>
        </div>
      </div>
    </div>
  </div>
</section>
