<script>
    import { stores } from '@sapper/app';

	export let segment;

    const { preloading } = stores();

    function toggleMenu() {
        const menu = document.querySelector('.gg-mobile-menu');
        menu.classList.toggle('active')
    }
</script>

<style>
#load-bar {
  animation: cssAnimation 0s 250ms forwards;
  visibility: hidden;
}

@keyframes cssAnimation {
  to   { visibility: visible; }
}

.slider {
  position: fixed;
  width: 100%;
  height: 5px;
  top: 0;
  left: 0;
  overflow-x: hidden;
}

.line{
  position: absolute;
  opacity: 0.4;
  background: #4a8df8;
  width: 150%;
  height: 5px;
}

.subline {
  position: absolute;
  background: #4a8df8;
  height: 5px;
}
.inc {
  animation: increase 2s infinite;
}
.dec {
  animation: decrease 2s 0.5s infinite;
}

@keyframes increase {
   from { left: -5%; width: 5%; }
   to { left: 130%; width: 100%;}
}
@keyframes decrease {
   from { left: -80%; width: 80%; }
   to { left: 110%; width: 10%;}
}

.gg-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.gg-header-link {
  position: relative;
  padding: 5px 0;
  color: white;
  font-weight: 600;
  opacity: .75;
  transition: .2s;
}

.gg-header-link.active,
.gg-header-link:hover {
    opacity: 1;
}

.gg-header-link:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 20px;
    height: 2px;
    background: #f7e704;
    transition: .2s;
}

.gg-header-link:hover::after {
  width: 100%;
}

.gg-header-link.active::after {
  width: 100%;
}

.gg-home-active {
  visibility: hidden;
}

.gg-footer {
  box-shadow: 0 1000px 0 1000px #1a2b33;
}

.gg-mobile-menu {
    position: absolute;
    z-index: 1;
    background: white;
    right: 0;
    top: 100%;
    padding: 10px 0;
    opacity: 0;
    visibility: hidden;
    transition: .4s;
}
.gg-mobile-menu.active {
    visibility: visible;
    opacity: 1;
}

.gg-mobile-menu a {
    padding: 10px;
    display: block;
}
.banner {
    font-size: 16px;
    display: flex;
    color: white;
    background: linear-gradient(to right, #00407F,#21D2DC);
    margin: 1em;
    padding: 3em;
    border-radius: .5em;;
    overflow: hidden;
  }
  .banner-text-title {
    color: inherit;
    font-weight: normal;
    font-size: 2em;
    max-width: 32ch;
    margin: 0;
  }
  .banner-text-description {
    color: inherit;
    font-size: 1.25em;
    max-width: 37ch;
    margin: 1em 0 0;
  }
  .banner-action {
    flex: 1 0 auto;
    position: relative;
    padding: 2em 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .banner-action-button {
    position: relative;
    z-index: 1;
    font-family: inherit;
    font-size: inherit;
    font-weight: bold;
    padding: 1rem 2rem;
    color: #002A4B;
    background: #ffee00;
    border-radius: .25em;
    box-shadow: 0 .25em 3em rgba(0,0,0,.35);
    border: 1px solid rgba(0,0,0,.48);
    cursor: pointer;
    text-decoration: none;
  }
  .banner-action-image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  @media (max-width: 1200px) {
    .banner {
      font-size: 14px;
    }
  }
  @media (max-width: 900px) {
    .banner {
      font-size: 12px;
      flex-direction: column;
    }
    .banner-action {
      justify-content: flex-start;
    }
    .banner-action-image {
      margin: auto 0 0 auto;
      transform: translate(50%,50%);
    }
  }

</style>

<article class="banner">
  <div class="banner-text">
    <h1 class="banner-text-title">Attending a Society for Glycobiology Annual meeting in San Diego?</h1>
    <p class="banner-text-description">Make sure to visit us on <b>table number 20</b>! For specific project ideas, you can get in touch with us to further discuss it.</p>
  </div>
  <div class="banner-action">
    <svg class="banner-action-image" viewBox="0 0 830 830" fill="none">
      <rect width="830" height="830" rx="415" fill="#fff" fill-opacity=".09"/>
      <rect x="83" y="83" width="664" height="664" rx="332" fill="#fff" fill-opacity=".09"/>
      <rect x="166" y="166" width="498" height="498" rx="249" fill="#fff" fill-opacity=".09"/>
      <rect x="249" y="249" width="332" height="332" rx="166" fill="#fff" fill-opacity=".09"/>
      <rect x="332" y="332" width="166" height="166" rx="83" fill="#fff" fill-opacity=".09"/>
    </svg>
    <a href="https://calendly.com/dom-glycanage/genos-let-s-partner-up" class="banner-action-button">Get in touch</a>
  </div>
</article>

<div style="position:relative">
  <header class="gg-header p-y-xs">
    <div class="grid">
      <div class="col-12">
        <nav class="flex fw-wrap jc-between ai-center">
          <a class="m-y-s" href="/">
            <img src="assets/images/logo-light.svg" alt="Genos Glyco" width="160">
          </a>
          <div class="p-y-s hide-m">
            <a href="publications" rel="prefetch" class="gg-header-link m-x-s {segment === 'publications' ? 'active' : ''}">Publications</a>
            <a href="services" class="gg-header-link m-x-s {segment === 'services' ? 'active' : ''}">Services</a>
            <a href="projects" rel="prefetch" class="gg-header-link m-x-s {segment === 'projects' ? 'active' : ''}">Projects</a>
            <a href="news" rel="prefetch" class="gg-header-link m-x-s {segment === 'news' ? 'active' : ''}">News</a>
            <a href="our-team" rel="prefetch" class="gg-header-link m-x-s {segment === 'our-team' ? 'active' : ''}">Our team</a>
      <a href="contact-us" rel="prefetch" class="gg-header-link m-x-s {segment === 'contact-us' ? 'active' : ''}">Contact us</a>
            <a href="https://glycanage.com/science-magazine/" rel="noopener" target="_blank" class="gg-header-link m-x-s">Science Magazine</a>
          </div>
          <div class="show-m relative">
              <span class="c-l-primary" style="cursor: pointer;" on:click={toggleMenu}>Menu</span>
              <div class="gg-mobile-menu">
                <a href="publications" rel="prefetch">Publications</a>
                <a href="services">Services</a>
                <a href="projects" rel="prefetch">Projects</a>
                <a href="news" rel="prefetch">News</a>
                <a href="our-team" rel="prefetch">Our team</a>
                <a href="contact-us" rel="prefetch">Contact us</a>
          <a href="https://glycanage.com/science-magazine/" rel="noopener" target="_blank">Science Magazine</a>
              </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  
  <main>
      {#if $preloading}
      <div id="load-bar">
          <div class="slider">
            <div class="line"></div>
            <div class="subline inc"></div>
            <div class="subline dec"></div>
          </div>
      </div>
      {/if}
    <slot></slot>
  </main>
  
  <footer class="gg-footer p-t-m bg-d-primary c-l-secondary">
    <div class="grid">
      <div class="col-6 col-xs-12">
        <a href="/"><img src="assets/images/logo-light.svg" alt="Genos Glyco" width="160"></a>
      </div>
      <div class="col-6 col-xs-12">
        <div class="flex fd-col ai-end p-b-s">
          <a class="link" href="https://www.google.com/maps/place/Genos+DNA+laboratorij+d.o.o./@45.819438,16.020512,15z/data=!4m2!3m1!1s0x0:0xe1b9f7b230482795?ved=2ahUKEwiAydKcq87eAhWkK8AKHXWvCWsQ_BIwCnoECAYQCA" target="_blank" rel="noopener">Borongajska cesta 83h, 10000 Zagreb</a>
          <div class="p-y-xs ta-right">
            <a class="link" href="tel:+38516471181">+385 1 647 1181</a><br>
            <a class="link" href="tel:+38516471182">+385 1 647 1182</a><br>
            <a class="link" href="tel:+38516471169">Fax: +385 1 647 1169</a>
          </div>
          <a class="link" href="mailto:info@genos-glyco.com">info@genos-glyco.com</a>
        </div>
      </div>
      <div class="col-12">
        <hr>
      </div>
      <div class="col-12">
        <div class="flex ai-center p-b-xs">
          <a href="https://twitter.com/GGlycoscience" target="_blank" rel="noopener">
            <img src="assets/images/twitter.svg" alt="Twitter">
          </a>
          <div class="f1"></div>
          <span class="m-x-s">© 2019 Genos Glyco</span>
          <a class="c-l-primary" href="https://jaspero.co/" target="_blank" rel="noopener">By Jaspero</a>
        </div>
      </div>
    </div>
  </footer>
</div>
