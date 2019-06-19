<script context="module">
	export function preload({ params, query }) {
		return this.fetch('index.json')
		    .then(r => r.json())
	}
</script>

<script>
    import { fade, fly } from 'svelte/transition';

    export let members;
    export let news;
    export let projects;
    export let publications;

    let totalLengthRound;

    if (process.browser) {
       for (let i = 0; i < members.length; i++) {
          if (window.innerWidth >= 1400) {
              members[i].page = Math.floor(i / 4);
              totalLengthRound = Math.ceil(members.length / 4);
          } else if (window.innerWidth >= 900 && window.innerWidth <= 1400) {
              members[i].page = Math.floor(i / 3)
              totalLengthRound = Math.ceil(members.length / 3);
          } else if (window.innerWidth >= 600 && window.innerWidth <= 900) {
              members[i].page = Math.floor(i / 2)
              totalLengthRound = Math.ceil(members.length / 2);
          } else {
              members[i].page = i
              totalLengthRound = members.length;
          }
       }
    }

    let slidePage = 0;
    let dialogOpen = null;

    function nextSlide() {
        if (slidePage < totalLengthRound - 1){
            slidePage++;

        } else {
            slidePage = 0;
        }
    }

    function prevSlide() {
       if (slidePage > 0){
           slidePage--;
       } else {
           slidePage = totalLengthRound - 1;
       }
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

@media (max-width: 600px) {
    .gg-intro-content {
      flex-direction: column;
    }
    .gg-intro-title {
      border-left: none;
      margin-left: 62px;
      border-top: 2px solid white;

    }
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

.gg-member-card:hover::after {
    opacity: 1;
}

.gg-member-avatar {
  display: inline-block;
  border: 1px solid rgba(0,0,0,.12);
  border-radius: 50%;
  padding: 5px;
}

.gg-member-avatar img {
border-radius: 50%;
width: 150px;
min-width: 150px;
height: 150px;
min-height: 150px;
}

.gg-single-member-dialog {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
}

.gg-single-member {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  max-width: 80vw;
  max-height: 80vh;
  overflow: auto;
  margin: auto;
  display: flex;
  border-radius: 8px; }
  @media (max-width: 1200px) {
    .gg-single-member {
      flex-direction: column;
      max-width: 96vw;
      max-height: 96vh; } }

.gg-single-member-avatar {
  display: inline-block;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 5px;
  margin-top: 70px; }
  @media (max-width: 1200px) {
    .gg-single-member-avatar {
      margin-top: 0; } }

.gg-single-member-avatar > img {
border-radius: 50%;
  width: 150px;
  height: 150px;
  min-width: 150px;
  min-height: 150px; }

.gg-single-member-close {
  position: absolute;
  top: 20px;
  right: 20px;
}


.item {
    display: none;
}

.item.active {
    display: block;
}
.team {
    height: 600px;
}
.arrow {
    cursor: pointer;
    height: 30px;
}
</style>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Genos" />
  <meta name="author" content="Jaspero Ltd." />
  <meta name="tags" content="Genos" />
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
        <span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-team.svg" alt=""></span>
        <div class="p-l-s">
          <h6 class="m-b-xs">Global leader in glycomics</h6>
          <p>
            The field of high-throughput glycomics was opened with our 2008 study of total plasma glycome on over 1,000 individuals from the Croatian island Vis. Today we have over 10 years of experience in glycomics, over 100 research publications and more than 30 scientists completely devoted to answering opened questions about glycans and their functional roles in biology.
          </p>
        </div>
      </div>
      <div class="flex ai-start m-b-m">
        <span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-publication.svg" alt=""></span>
        <div class="p-l-s">
          <h6 class="m-b-xs">Research</h6>
          <p>
            The knowledge about glycans is lagging significantly behind the knowledge about DNA and proteins and through multiple bilateral and multilateral research projects, including the Human Glycome Project, we are trying to narrow this gap. We are proud to be able to collaborate with leading scientists and contribute glycan data to some of the best clinical and epidemiological cohorts in the World (including TwinsUK, 10001 Dalmatians, ORCADES, EPIC, KORA, Finrisk, SABRE, etc)
          </p>
        </div>
      </div>
      <div class="flex ai-start m-b-m">
        <span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-service.svg" alt=""></span>
        <div class="p-l-s">
          <h6 class="m-b-xs">Commercial services</h6>
          <p>Our knowledge and expertise is available to any interested party in academia or industry through high-throughput glycan analysis and other commercial services that we offer, ranging from analytical chemistry to study design and statistical data analysis.</p>
        </div>
      </div>
    </div>
  </div>
</section>





<!--Featured publications-->
<section class="bg-l-secondary p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">Featured publications<span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-publication.svg" alt=""></span></h4>
    </div>
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
            </td>
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
      <h4 class="gg-title c-l-primary">Services<span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-service.svg" alt=""></span></h4>
    </div>
    <div class="col-12">
      <ul>
        <li>High-throughput analyses</li>
        <li>In depth glycoprofiling</li>
        <li>Study design</li>
        <li>Data analysis</li>
        <li>Joint project development</li>
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
      <h4 class="gg-title">Recent projects<span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-project.svg" alt=""></span></h4>
    </div>
    {#each projects as project}
    <div class="col-6 col-s-12">
      <a class="gg-card" rel="prefetch" href="/projects/{project.url}">
        <p class="m-b-s fw-bold">{project.title}</p>
        <p class="m-b-s">{project.shortDescription}</p>
      </a>
    </div>
    {/each}
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
      <h4 class="gg-title">Our team<span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-team.svg" alt=""></span></h4>
      <div class="arrows flex">
      <button class="arrow flex ai-center bg-l-primary m-r-s" on:click="{prevSlide}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#00407F">
          <g data-name="Layer 2">
            <path d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z" data-name="chevron-left"/>
          </g>
        </svg>
       </button>
      <button class="arrow flex ai-center bg-l-primary" on:click="{nextSlide}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#00407F">
          <g data-name="Layer 2">
            <path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z" data-name="chevron-right"/>
          </g>
        </svg>
      </button>
      </div>
    </div>
    <div class="col-12 of-hidden relative flex">
     {#each members as member, i}
     <div class="col-3 col-m-4 col-s-6 col-xs-12 p-a-s ta-center item" class:active="{slidePage === member.page}" on:click={() => dialogOpen = member}>
         <div class="gg-member-card">
           <div class="gg-member-avatar">
             <img draggable="false" src="{member.profileImage}" width="150" alt="">
           </div>
           <p class="fw-bold m-t-s m-b-xs">{member.fullName}</p>
           {#if member.title}
           <p class="m-b-s">{member.title}</p>
           {/if}
         </div>
     </div>
     {/each}
    </div>
  </div>
</section>





<!--Single member dialog-->
{#if dialogOpen}
<section class="gg-single-member-dialog" in:fade="{{duration: 200}}" out:fade="{{duration: 200}}">
    <article class="gg-single-member"  in:fly="{{y: 200, duration: 600}}">
      <div class="bg-l-secondary p-x-m p-t-l">
        <div class="gg-single-member-avatar m-b-s">
          <img width="150" src={dialogOpen.profileImage} alt="">
        </div>
      </div>
      <div class="p-y-l p-x-m">
        <h6 class:m-b-s={!dialogOpen.title}>{dialogOpen.fullName}</h6>
        {#if dialogOpen.title}
        <p class="fs-small c-d-secondary m-t-xs m-b-s">{dialogOpen.title}</p>
        {/if}
        <div class="gg-read-format c-d-secondary">
            <p>{@html dialogOpen.longBio}</p>
        </div>
      </div>
      <button class="gg-single-member-close gg-icon-button" on:click={() => dialogOpen = null}>
        <img src="assets/images/icon-close.svg" alt="Close dialog">
    </button>
    </article>
</section>
{/if}





<!--Recent news-->
<section class="bg-l-gradient p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">Recent news<span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-news.svg" alt=""></span></h4>
    </div>
  {#each news as item}
    <div class="col-6 col-s-12">
      <a class="gg-card" rel="prefetch" href="/news/{item.url}">
        <p class="fs-small m-b-xs m-t-s">{item.publicationDate}</p>
        <p class="m-b-s fw-bold">{item.title}</p>
        <p class="m-b-s">{item.subTitle}</p>
      </a>
    </div>
    {/each}
    <div class="col-12">
      <div class="p-y-s ta-center">
        <a class="link c-primary" rel="prefetch" href="news">Learn more about glycans</a>
      </div>
    </div>
  </div>
</section>

