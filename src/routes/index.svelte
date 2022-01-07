<script>
	import IntersectionObserver from '$lib/IntersectionObserver.svelte';
</script>

<section class="hero">
  <h1 class="hero-text">Simple and automated scientific solutions for your research or commercial needs</h1>

  <div class="hero-grid">
    <div class="hero-grid-item">
      <div class="hero-grid-item-title">200k+</div>
      <div class="hero-grid-item-text">Samples analyzed to date</div>
      <div class="hero-grid-item-bar"></div>
    </div>
    <div class="hero-grid-item">
      <div class="hero-grid-item-title">200k+</div>
      <div class="hero-grid-item-text">Samples analyzed daily</div>
      <div class="hero-grid-item-bar"></div>
    </div>
    <div class="hero-grid-item">
      <div class="hero-grid-item-title">200k+</div>
      <div class="hero-grid-item-text">Scientific publications</div>
      <div class="hero-grid-item-bar"></div>
    </div>
    <div class="hero-grid-item">
      <div class="hero-grid-item-title">200k+</div>
      <div class="hero-grid-item-text">Collaboration projects</div>
      <div class="hero-grid-item-bar"></div>
    </div>
    <div class="hero-grid-cta">
      <a class="hero-grid-cta-inner" href="/request">Submit free request</a>
    </div>
  </div>
</section>

<div style="height: 100vh"></div>

<IntersectionObserver let:intersecting top={-100} bottom={-100}>
  <div class="{intersecting ? 'yes' : 'no'}">Intersection</div>
</IntersectionObserver>

<style>
  /* hero */
  .hero {
    padding: 0 7rem;
  }

  /* hero text */
  .hero-text {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  /* grid */
  .hero-grid {
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(12, 1fr);
  }

  /* grid item */
  .hero-grid-item {
    grid-column: span 3;
  }

  /* grid item title */
  .hero-grid-item-title {
    line-height: 1.2;
    font-size: 3.75rem;
  }

  /* grid item text */
  .hero-grid-item-text {
    font-size: 1.25rem;
  }

  /* grid item bar */
  .hero-grid-item-bar {
    margin-top: .5rem;
    height: 40px;
  }

  /* grid call to action */
  .hero-grid-cta {
    position: relative;
    grid-column: span 12;
    font-size: 2rem;
    transition: .7s;
  }

  /* grid call to action line */
  .hero-grid-cta::after {
    content: '';
    position: absolute;
    top: 6rem;
    left: 0;
    right: 0;
    margin: auto;
    width: 14ch;
    height: 0.5rem;
    background: #FFFFFF;
  }

  /* grid call to action inner */
  .hero-grid-cta-inner {
    display: block;
    background: #4095BF;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    line-height: 1.5;
    padding: 3rem 0;
    font-size: inherit;
    transition: .2s;
  }

  /* grid item text colors */
  .hero-grid-item:nth-child(1) { color: #D95C26; }
  .hero-grid-item:nth-child(2) { color: #0A5C5C; }
  .hero-grid-item:nth-child(3) { color: #EC9C13; }
  .hero-grid-item:nth-child(4) { color: #335C0A; }

  /* grid item bar background colors */
  .hero-grid-item:nth-child(1) .hero-grid-item-bar { background-color: #FF9933; }
  .hero-grid-item:nth-child(2) .hero-grid-item-bar { background-color: #66CCCC; }
  .hero-grid-item:nth-child(3) .hero-grid-item-bar { background-color: #FFDD33; }
  .hero-grid-item:nth-child(4) .hero-grid-item-bar { background-color: #99CC66; }


  /* neke gluposti kekw */
  .yes {
    background: blue;
  }
  .no {
    background: red;
  }
</style>