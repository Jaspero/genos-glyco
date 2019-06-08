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
        <tr>
          <td data-label="Year">2018</td>
          <td data-label="Title"><a class="link">Glycosylation of human plasma lipoproteins reveals a high level of diversity, which directly impacts their functional properties</a></td>
          <td data-label="Journals">Frontiers</td>
          <td data-label="Authors">Sukhorukov V., Gudelj I., Pučić-Baković M., Zakiev E., Orekho A., Kontush A., Lauc G.</td>
        </tr>
        <tr>
          <td data-label="Year">2018</td>
          <td data-label="Title"><a class="link">Glycosylation of human plasma lipoproteins reveals a high level of diversity, which directly impacts their functional properties</a></td>
          <td data-label="Journals">Frontiers</td>
          <td data-label="Authors">Sukhorukov V., Gudelj I., Pučić-Baković M., Zakiev E., Orekho A., Kontush A., Lauc G.</td>
        </tr>
        <tr>
          <td data-label="Year">2018</td>
          <td data-label="Title"><a class="link">Glycosylation of human plasma lipoproteins reveals a high level of diversity, which directly impacts their functional properties</a></td>
          <td data-label="Journals">Frontiers</td>
          <td data-label="Authors">Sukhorukov V., Gudelj I., Pučić-Baković M., Zakiev E., Orekho A., Kontush A., Lauc G.</td>
        </tr>
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
      <div class="gg-card">
        <p class="fs-small m-b-xs m-t-s">Nov 5, 2018</p>
        <p class="m-b-s fw-bold">High Glycan</p>
        <p class="m-b-s">Methods for highthroughput analysis of protein glycosylation</p>
      </div>
    </div>
    <div class="col-6 col-s-12">
      <div class="gg-card">
        <p class="fs-small m-b-xs m-t-s">Nov 5, 2018</p>
        <p class="m-b-s fw-bold">High Glycan</p>
        <p class="m-b-s">Methods for highthroughput analysis of protein glycosylation</p>
      </div>
    </div>
    <div class="col-6 col-s-12">
      <div class="gg-card">
        <p class="fs-small m-b-xs m-t-s">Nov 5, 2018</p>
        <p class="m-b-s fw-bold">High Glycan</p>
        <p class="m-b-s">Methods for highthroughput analysis of protein glycosylation</p>
      </div>
    </div>
    <div class="col-6 col-s-12">
      <div class="gg-card">
        <p class="fs-small m-b-xs m-t-s">Nov 5, 2018</p>
        <p class="m-b-s fw-bold">High Glycan</p>
        <p class="m-b-s">Methods for highthroughput analysis of protein glycosylation</p>
      </div>
    </div>
    <div class="col-12">
      <div class="p-y-s ta-center">
        <a class="link c-primary" rel="prefetch" href="projects">View all projects</a>
      </div>
    </div>
  </div>
</section>





<!--Our team-->
<section class="bg-l-secondary p-y-l">
  <div class="grid p-b-m">
    <div class="col-12">
      <h4 class="gg-title">Our team<span class="gg-icon"><img src="assets/images/icon-team.svg" aria-hidden="true"></span></h4>
    </div>
    <div class="col-12 of-hidden">
      <!--<jp-slider [options]="sliderOptions">
        <jp-slides>
          <jp-slide *ngFor="let member of members">
            <div (click)="openUser(member)" style="padding-right: 20px;">
              <div class="gg-member-card">
                <div class="gg-member-avatar">
                  <img draggable="false" *ngIf="member.profileImage" [src]="member.profileImage" width="150">
                </div>
                <p class="fw-bold m-t-s m-b-xs">{{member.fullName}}</p>
                <p class="m-b-s">Title</p>
              </div>
            </div>
          </jp-slide>
        </jp-slides>
        <nav class="ta-center">
          <button class="gg-icon-button" jpSlideArrow="left"><img src="assets/images/icon-nav-left.svg" alt="Previous"></button>
          <button class="gg-icon-button" jpSlideArrow="right"><img src="assets/images/icon-nav-right.svg" alt="Next"></button>
        </nav>
      </jp-slider>-->
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
      <div class="gg-card">
        <p class="fs-small m-b-xs m-t-s">Nov 5, 2018</p>
        <p class="m-b-s fw-bold">GlyCoCan – watch the video on biomarker potential of glycosylation in colorectal cancer prepared by GlyCoCan Early Stage Researchers</p>
        <p class="m-b-s">Colorectal cancer is a life-threatening disease affecting the large bowel. Improved diagnostic methods could notably increase the chance of a disease-free life due to a timely diagnosis followed by effective,…</p>
      </div>
    </div>
    <div class="col-6 col-s-12">
      <div class="gg-card">
        <p class="fs-small m-b-xs m-t-s">Nov 5, 2018</p>
        <p class="m-b-s fw-bold">GlyCoCan – watch the video on biomarker potential of glycosylation in colorectal cancer prepared by GlyCoCan Early Stage Researchers</p>
        <p class="m-b-s">Colorectal cancer is a life-threatening disease affecting the large bowel. Improved diagnostic methods could notably increase the chance of a disease-free life due to a timely diagnosis followed by effective,…</p>
      </div>
    </div>
    <div class="col-6 col-s-12">
      <div class="gg-card">
        <p class="fs-small m-b-xs m-t-s">Nov 5, 2018</p>
        <p class="m-b-s fw-bold">GlyCoCan – watch the video on biomarker potential of glycosylation in colorectal cancer prepared by GlyCoCan Early Stage Researchers</p>
        <p class="m-b-s">Colorectal cancer is a life-threatening disease affecting the large bowel. Improved diagnostic methods could notably increase the chance of a disease-free life due to a timely diagnosis followed by effective,…</p>
      </div>
    </div>
    <div class="col-6 col-s-12">
      <div class="gg-card">
        <p class="fs-small m-b-xs m-t-s">Nov 5, 2018</p>
        <p class="m-b-s fw-bold">GlyCoCan – watch the video on biomarker potential of glycosylation in colorectal cancer prepared by GlyCoCan Early Stage Researchers</p>
        <p class="m-b-s">Colorectal cancer is a life-threatening disease affecting the large bowel. Improved diagnostic methods could notably increase the chance of a disease-free life due to a timely diagnosis followed by effective,…</p>
      </div>
    </div>
    <div class="col-12">
      <div class="p-y-s ta-center">
        <a class="link c-primary" rel="prefetch" href="news">Learn more about glycans</a>
      </div>
    </div>
  </div>
</section>

