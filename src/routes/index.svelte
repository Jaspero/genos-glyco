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
    <div class="hero-grid-scroll">
      <img class="hero-grid-scroll-arrow" height="24" src="/images/arrow-down.svg" alt="Arrow down">
      <img class="hero-grid-scroll-arrow" height="24" src="/images/arrow-down.svg" alt="Arrow down">
      <img class="hero-grid-scroll-arrow" height="24" src="/images/arrow-down.svg" alt="Arrow down">
      <p class="hero-grid-scroll-text">Scroll to learn more</p>
      <img class="hero-grid-scroll-arrow" height="24" src="/images/arrow-down.svg" alt="Arrow down">
      <img class="hero-grid-scroll-arrow" height="24" src="/images/arrow-down.svg" alt="Arrow down">
      <img class="hero-grid-scroll-arrow" height="24" src="/images/arrow-down.svg" alt="Arrow down">
    </div>
  </div>
</section>

<section class="lab">

</section>

<section class="solutions">
  <div class="solutions-title">
    <div>We offer bespoke</div>
    <div class="solutions-title-colored">scientific solutions</div>
  </div>
  <ol class="solutions-list">
    <li class="solutions-list-item">
      <div class="solutions-list-item-text">Sample preparation</div>
      <img src="/images/sample-prep.png" alt="Sample preparation" height="200" class="solutions-list-item-image">
    </li>
    <li class="solutions-list-item">
      <div class="solutions-list-item-text">Biomarker discovery</div>
      <img src="/images/sample-prep.png" alt="Sample preparation" height="200" class="solutions-list-item-image">
    </li>
    <li class="solutions-list-item">
      <div class="solutions-list-item-text">In-depth glycoprofiling</div>
      <img src="/images/sample-prep.png" alt="Sample preparation" height="200" class="solutions-list-item-image">
    </li>
    <li class="solutions-list-item">
      <div class="solutions-list-item-text">High-throughput analysis</div>
      <img src="/images/sample-prep.png" alt="Sample preparation" height="200" class="solutions-list-item-image">
    </li>
    <li class="solutions-list-item">
      <div class="solutions-list-item-text">Data analysis</div>
      <img src="/images/sample-prep.png" alt="Sample preparation" height="200" class="solutions-list-item-image">
    </li>
    <li class="solutions-list-item">
      <div class="solutions-list-item-text">Joint project development</div>
      <img src="/images/sample-prep.png" alt="Sample preparation" height="200" class="solutions-list-item-image">
    </li>
  </ol>
</section>

<section class="collaboration">
  <h1 class="collaboration-title">
    Success through <br>
    <span class="collaboration-title-colored">collaboration</span>
  </h1>
  <p class="collaboration-text">
    With over 20 large collaborative projects conducted with scientific teams from different research centers from <b>around the world</b>, we have the expertise to design studies and bring them to a successful conclusion.
  </p>
</section>

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
    line-height: 1.3;
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  /* grid */
  .hero-grid {
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(4, 1fr);
  }

  /* grid item */
  .hero-grid-item {
    grid-column: span 1;
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
    grid-column: span 4;
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

  /* scroll to learn more */
  .hero-grid-scroll {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: span 4;
    font-size: 2rem;
  }

  /* scroll arrow */
  .hero-grid-scroll-arrow {
    margin: 0 4px;
  }

  /* scroll text */
  .hero-grid-scroll-text {
    margin: 0 15px;
  }

  /* lab */
  .lab {

  }

  /* solutions */
  .solutions {
    margin-top: 5rem;
    padding: 0 7rem;
    overflow: hidden;
  }

  /* solutions title */
  .solutions-title {
    font-size: 5rem;
    font-weight: bold;
    padding: 4rem 0;
    text-align: center;
    background-image: url("/images/hexagons.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  /* solutions colored title */
  .solutions-title-colored {
    color: #40BFBF;
  }

  /* solutions list */
  .solutions-list {
    padding: 0;
    list-style: none;
    counter-reset: li;
  }

  /* solutions list item */
  .solutions-list-item {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 2rem 0;
  }

  /* odd-numbered items in list */
  .solutions-list-item:nth-child(2n - 1) .solutions-list-item-image        { margin-left: 10rem; }
  .solutions-list-item:nth-child(2n - 1) .solutions-list-item-text         { text-align: right }
  .solutions-list-item:nth-child(2n - 1) .solutions-list-item-text::before { right: -3rem; }
  .solutions-list-item:nth-child(2n - 1) .solutions-list-item-text::after  { left: -7rem; }

  /* even-numbered items in list */
  .solutions-list-item:nth-child(2n)                                   { flex-direction: row-reverse; }
  .solutions-list-item:nth-child(2n) .solutions-list-item-image        { margin-right: 10rem; }
  .solutions-list-item:nth-child(2n) .solutions-list-item-text         { text-align: left }
  .solutions-list-item:nth-child(2n) .solutions-list-item-text::before { left: -3.5rem; }
  .solutions-list-item:nth-child(2n) .solutions-list-item-text::after  { right: -7rem; }

  /* list number */
  .solutions-list-item:nth-child(1) .solutions-list-item-text::before { color: #4095BF }
  .solutions-list-item:nth-child(2) .solutions-list-item-text::before { color: #40BFBF }
  .solutions-list-item:nth-child(3) .solutions-list-item-text::before { color: #80BF40 }
  .solutions-list-item:nth-child(4) .solutions-list-item-text::before { color: #F9C006 }
  .solutions-list-item:nth-child(5) .solutions-list-item-text::before { color: #FF8000 }
  .solutions-list-item:nth-child(6) .solutions-list-item-text::before { color: #4095BF }

  /* solutions list item text */
  .solutions-list-item-text {
    position: relative;
    font-size: 3rem;
    flex: 1;
    white-space: nowrap;
  }

  /* solutions list number */
  .solutions-list-item-text::before {
    position: absolute;
    content: counter(li, decimal-leading-zero);
    counter-increment: li;
    display: block;
    width: 1em;
    right: -2rem;
    font-size: 2rem;
  }

  /* solutions list border */
  .solutions-list-item-text::after {
    z-index: -1;
    position: absolute;
    bottom: 0;
    content: '';
    width: 100vw;
    border-bottom: 4px solid #D9F2F2;
  }

  /* solutions list image */
  .solutions-list-item-image {

  }

  /* collaboration section */
  .collaboration {
    background-image: url("/images/collab.png");
    background-size: cover;
  }

  /* collaboration title */
  .collaboration-title {
    padding: 5rem 12rem;
    font-size: 6rem;
  }

  /* collaboration colored title */
  .collaboration-title-colored {
    color: #80BF40;
  }

  .collaboration-text {
    font-size: 1.5rem;
    padding: 0 24rem;
  }

  /* neke gluposti kekw */
  .yes {
    background: blue;
  }
  .no {
    background: red;
  }

  /* responsiveness */
  @media(max-width: 1200px) {
    .hero-text {
      font-size: 2.5rem;
    }
    .hero-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .hero-grid-cta {
      font-size: 2rem;
      grid-column: span 2;
    }
    .hero-grid-scroll {
      grid-column: span 2;
    }
  }

  @media(max-width: 900px) {
    .hero {
      padding: 0 2rem;
    }
    .hero-text {
      font-size: 1.5rem;
    }
    .hero-grid-item-title {
      font-size: 2rem;
    }
    .hero-grid-item-text {
      font-size: 1rem;
    }
  }

  @media(max-width: 600px) {
    .hero-grid {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1em;
    }
    .hero-grid-cta {
      grid-column: span 1;
      font-size: 1.5rem;
    }
    .hero-grid-cta::after {
      top: 5rem;
    }
    .hero-grid-cta-inner {
      padding: 2.5rem 0;
    }
    .hero-grid-scroll {
      grid-column: span 1;
    }
  }
</style>