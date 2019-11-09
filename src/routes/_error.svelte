<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
.gg-404-intro {
  padding: 200px 0 60px;
  background-image: url("../../../assets/images/section-intro.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<!--404 intro-->
<section class="gg-404-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">Error<span class="gg-icon" aria-hidden="true"><img loading="lazy" src="assets/images/icon-close.svg" alt=""></span></h4>
    </div>
  </div>
</section>





<!--404-->
<section class="p-t-l p-b-xl">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">This page does not exist</h4>
    </div>
    <div class="col-12 gg-read-format">
      <p>This page doesn't exist or some other error has occured.</p>
      <p>Please refer to the following navigation:</p>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/publications">Publications</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/news">News</a></li>
      </ul>
    </div>
  </div>
</section>
