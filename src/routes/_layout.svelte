<script>
	export let segment;
</script>

<style>
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

.gg-header-link.active:hover {
  width: 100%;
}

.gg-home-active {
  visibility: hidden;
}

.gg-footer {
  box-shadow: 0 1000px 0 1000px #1a2b33;
}

</style>

<header class="gg-header p-y-xs">
  <div class="grid">
    <div class="col-12">
      <nav class="flex fw-wrap jc-between ai-center">
        <a class="m-y-s" href="/">
          <img src="assets/images/logo-light.svg" alt="Genos Glyco" width="160">
        </a>
        <div class="p-y-s">
          <a href="publications" rel="prefetch" class="gg-header-link m-x-s {segment === 'publications' ? 'active' : ''}">Publications</a>
          <a href="services" class="gg-header-link m-x-s {segment === 'services' ? 'active' : ''}">Services</a>
          <a href="projects" rel="prefetch" class="gg-header-link m-x-s {segment === 'projects' ? 'active' : ''}">Projects</a>
          <a href="news" rel="prefetch" class="gg-header-link m-x-s {segment === 'news' ? 'active' : ''}">News</a>
        </div>
      </nav>
    </div>
  </div>
</header>

<main>
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
