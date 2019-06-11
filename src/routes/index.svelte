<script context="module">
	export function preload({ params, query }) {
		return this.fetch('index.json')
		    .then(r => r.json());
	}
</script>

<script>
    export let members;
    export let news;
    export let projects;
    export let publications;

    let page = 0;
    let memb = [
        {
            name: 'filip',
            page: 0
        },
        {
            name: 'bobo',
            page: 0
        },
        {
            name: 'bobo',
            page: 0
        },
        {
            name: 'bobo',
            page: 0
        },
        {
            name: 'filip',
            page: 1
        },
        {
            name: 'bobo',
            page: 1
        },
        {
            name: 'bobo',
            page: 1
        },
        {
            name: 'bobo',
            page: 1
        },
        {
            name: 'filip',
            page: 2
        },
        {
            name: 'bobo',
            page: 2
        },
        {
            name: 'bobo',
            page: 2
        },
        {
            name: 'bobo',
            page: 2
        },
    ];

    function nextSlide() {
      page += 1;
    }

    function prevSlide() {
      page -= 1;
    }



</script>

<style>
.gg-section-intro {
  padding: 200px 0 120px;
  background-image: url("/assets/images/section-intro.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.gg-intro-content {
  display: flex;
  align-items: start;
}

.gg-intro-title {
  font-weight: 400;
  color: white;
  padding: 6px 10px;
  border-left: 2px solid white;
  margin-left: 10px;
}

.gg-section-services {
  background-image: url("/assets/images/section-services.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.gg-member-card {
  position: relative;
  text-align: center;
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: .2s;
}

.gg-member-card:after {
   content: url("/assets/images/icon-search.svg");
   width: 20px;
   height: 20px;
   position: absolute;
   top: 10px;
   right: 10px;
   opacity: 0;
   transition: .2s;
}

.gg-member-card:hover {
    box-shadow: 0 4px 10px 0 rgba(0,0,0,.28);
    background: white;
    border: 1px solid rgba(0,0,0,.12);
}

.gg-member-card:hover .gg-member-card:after {
    opacity: 1;
}

.gg-member-avatar {
  display: inline-block;
  border: 1px solid rgba(0,0,0,.12);
  border-radius: 50%;
  padding: 5px;
}
/*Slider styles*/
.hide {
display: none;
}

.item {
display: none;
}

.item.active {
    display: block;
}

.img {
height: 200px;
}
.team {
height: 500px;
}
.arrow {
cursor: pointer;
height: 30px;
}
</style>

<svelte:head>
  <title>Home</title>
  <meta
    name="description"
    content="Sapper hosted on Firebase via Functions - example (link to article
    included)." />
  <meta name="author" content="Eckhardt Dreyer" />
  <meta
    name="tags"
    content="Firebase and Sapper, Host sapper on Firebase, Sapper firebase
    functions, Firebase, Sapper, SSR, Sapper SSR Firebase" />
  <!-- Twitter Card data -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@eckhardtdreyer" />
  <meta name="twitter:title" content="Sapper x Firebase" />
  <meta
    name="twitter:description"
    content="Sapper hosted on Firebase via Functions - example (link to article
    included)." />
  <meta name="twitter:creator" content="@eckhardtdreyer" />
  <meta
    name="twitter:image"
    content="https://sapper-firebase.firebaseapp.com/sapperfirebase.jpg" />

  <!-- Open Graph data -->
  <meta property="og:title" content="Sapper x Firebase" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="http://www.example.com/" />
  <meta
    property="og:image"
    content="https://sapper-firebase.firebaseapp.com/sapperfirebase.jpg" />
  <meta
    property="og:image:secure_url"
    content="https://sapper-firebase.firebaseapp.com/sapperfirebase.jpg" />
  <meta
    property="og:description"
    content="Sapper hosted on Firebase via Functions - example (link to article
    included)." />
  <meta property="og:site_name" content="Sapper x Firebase" />
</svelte:head>

<!--Intro-->
<section class="gg-section-intro">
  <div class="grid">
    <div class="col-12">
      <div class="gg-intro-content">
        <img src="assets/images/logo-light.svg" alt="Genos Glyco" width="220">
        <h1 class="gg-intro-title">SEE THE<br>COMPLETE<br>PICTURE.</h1>
      </div>
    </div>
  </div>
</section>





<!--About-->
<section class="bg-l-gradient p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">About us</h4>
    </div>
    <div class="col-12"></div>
    <div class="col-6 col-s-12">
      <p class="p-r-m m-b-m">Glycans are complex oligosaccharides covalently attached to the backbone of proteins. They significantly contribute to the structure and function of the majority of proteins. Changes in glycans have been reported in many inflammatory diseases, autoimmune diseases and in cancer where they reflect disease activity, or in some cases even precede the development of disease.</p>
    </div>
    <div class="col-6 col-s-12">
      <div class="flex ai-start m-b-m">
        <span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-team.svg"></span>
        <div class="p-l-s">
          <h6 class="m-b-xs">Global leaders in Glyco science</h6>
          <p>With over 10 years of experience and more than 30 scientists completely devoted to answering opened questions about glycans and their functional role, we are a global leader in the field of glycoscience.</p>
        </div>
      </div>
      <div class="flex ai-start m-b-m">
        <span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-publication.svg"></span>
        <div class="p-l-s">
          <h6 class="m-b-xs">Scientific publications</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div class="flex ai-start m-b-m">
        <span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-service.svg"></span>
        <div class="p-l-s">
          <h6 class="m-b-xs">Commercial services</h6>
          <p>Our knowledge and expertise is available to any interested parties in academia or industry through high-throughput glycan analysis and other commercial services that we offer, ranging from analytical chemistry to study design and statistical data analysis.</p>
        </div>
      </div>
      <div class="flex ai-start m-b-m">
        <span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-project.svg"></span>
        <div class="p-l-s">
          <h6 class="m-b-xs">Research projects</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>
</section>





<!--Featured publications-->
<section class="bg-l-secondary p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">Featured publications<span class="gg-icon"><img src="assets/images/icon-publication.svg" aria-hidden="true"></span></h4>
    </div>
    <div class="col-12">
      <table class="gg-publications-table">
        <thead>
        <tr>
          <th>Year</th>
          <th>Title</th>
          <th>Journal</th>
          <th>Authors</th>
        </tr>
        </thead>
        <tbody>
        {#each publications as publication}
          <tr>
            <td data-label="Year">{publication.year}</td>
            <td data-label="Title">{publication.title}</td>
            <td data-label="Journal">{publication.journal}</td>
            <td data-label="Authors">{publication.authors}</td>
          </tr>
        {/each}
        </tbody>
      </table>
    </div>
    <div class="col-12">
      <div class="p-y-s ta-center">
        <a class="link c-primary" rel="prefetch" href="publications">View all publications</a>
      </div>
    </div>
  </div>
</section>





<!--Services-->
<section class="gg-section-services bg-d-primary c-l-secondary p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">Services<span class="gg-icon"><img src="assets/images/icon-service.svg" aria-hidden="true"></span></h4>
    </div>
    <div class="col-12">
      <ul>
        <li>Immunoglobulin G (IgG) N-glycome analysis</li>
        <li>Plasma N-glycome analysis</li>
        <li>Study design</li>
        <li>Data analysis</li>
        <li>Joint project development</li>
        <li>Biological age analysis</li>
      </ul>
    </div>
    <div class="col-12">
      <div class="p-y-xs p-l-m">
        <a class="link c-l-primary" href="services">Learn more about our services</a>
      </div>
    </div>
  </div>
</section>





<!--Recent projects-->
<section class="bg-l-gradient p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">Recent projects<span class="gg-icon"><img src="assets/images/icon-project.svg" aria-hidden="true"></span></h4>
    </div>
    <div class="col-6 col-s-12">
    {#each projects as project}
      <div class="gg-card">
        <p class="fs-small m-b-xs m-t-s">{project.date}</p>
        <p class="m-b-s fw-bold">{project.title}</p>
        <p class="m-b-s">{project.subTitle}</p>
      </div>
    {/each}
    </div>
    <div class="col-12">
      <div class="p-y-s ta-center">
        <a class="link c-primary" rel="prefetch" href="projects">View all projects</a>
      </div>
    </div>
  </div>
</section>





<!--Our team-->
<section class="bg-l-secondary team p-y-l">
  <div class="grid p-b-m">
    <div class="col-12 flex jc-between ai-center">
      <h4 class="gg-title">Our team<span class="gg-icon"><img src="assets/images/icon-team.svg" aria-hidden="true"></span></h4>
      <div class="arrows flex">
      <button class="arrow flex ai-center bg-l-primary m-r-s" id="previous" on:click="{prevSlide}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#00407F">
            <g data-name="Layer 2">
              <path d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z" data-name="chevron-left"/>
            </g>
          </svg>
       </button>
      <button class="arrow flex ai-center bg-l-primary" id="next" on:click="{nextSlide}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#00407F">
              <g data-name="Layer 2">
                <path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z" data-name="chevron-right"/>
              </g>
            </svg>
      </button>
      </div>
    </div>
    <div class="col-12 of-hidden relative flex">
        {#each memb as single, index}
        <div class="col-3 p-a-s ta-center item" class:active="{page == single.page}">
         <div class="img bg-primary">
         {index}
            {single.name}
        </div>
        </div>
        {/each}
    </div>
  </div>
</section>





<!--Recent news-->
<section class="bg-l-gradient p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">Recent news<span class="gg-icon"><img src="assets/images/icon-news.svg" aria-hidden="true"></span></h4>
    </div>
    <div class="col-6 col-s-12">
      {#each news as item}
      <div class="gg-card">
        <p class="fs-small m-b-xs m-t-s">{item.date}</p>
        <p class="m-b-s fw-bold">{item.title}</p>
        <p class="m-b-s">{item.subTitle}</p>
      </div>
      {/each}
    </div>
    <div class="col-12">
      <div class="p-y-s ta-center">
        <a class="link c-primary" rel="prefetch" href="news">Learn more about glycans</a>
      </div>
    </div>
  </div>
</section>

