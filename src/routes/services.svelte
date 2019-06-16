<script>
    export let tab = 0;
</script>

<style>
.gg-services-intro {
  padding: 200px 0 60px;
  background-image: url("/assets/images/section-services.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>

<svelte:head>
	<title>Services</title>
	<meta name="description" content="This is the services page">
</svelte:head>

<!--Services intro-->
<section class="gg-services-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">Services<span class="gg-icon"><img src="assets/images/icon-service.svg" aria-hidden="true"></span></h4>
    </div>
  </div>
</section>





<!--Services-->
<section class="p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">What we offer</h4>
    </div>
    <div class="col-12">
      <div class="gg-tabs">
        <div class="gg-tabs-selection">
          <div class="gg-tabs-buttons">
            <button class="gg-tabs-button" class:active="{tab === 0}" on:click={() => tab = 0}>High-throughput analyses</button>
            <button class="gg-tabs-button" class:active="{tab === 1}" on:click={() => tab = 1}>In depth glycoprofiling</button>
            <button class="gg-tabs-button" class:active="{tab === 2}" on:click={() => tab = 2}>Study design</button>
            <button class="gg-tabs-button" class:active="{tab === 3}" on:click={() => tab = 3}>Data analysis</button>
            <button class="gg-tabs-button" class:active="{tab === 4}" on:click={() => tab = 4}>Joint project development</button>
          </div>
        </div>
        <div class="gg-tabs-content">
            <div class="grid">
                <div class="col-12 gg-read-format">
                    {#if tab === 0}
                        <p>Immunoglobulin G (IgG) N-glycosylation analysis (analysis of total released N-glycans by UPLC-FLR and subclass-specific Fc N-glycopeptide analysis by LC-MS)</p>
                        <p>Plasma N-glycosylation analysis (analysis of total released N-glycans by UPLC-FLR)</p>
                    {:else if tab === 1}
                        <p>Analysis of released N-glycans</p>
                        <p>Site-specific N-glycosylation analysis</p>
                        <p>N-glycosylation site occupancy analysis</p>
                    {:else if tab === 2}
                        <p>Genos offers consultancies in study design, under the full or partial control of the experiment, for different fields of biomedicine. The mixture of expertise from Genos employees (biologists, pharmacist, chemists, statisticians and mathematicians) ensures the quality of the study design.</p>
                    {:else if tab === 3}
                        <p>Data analysis is an important aspect of the workflow Genos provides to the public. Since pure numbers, without thoughtful and meaningful explanation, are usually of little interest Genos invested significantly to its employee’s competence in statistics and computer science. Therefore, Genos now offers a wide range of statistical techniques from basic experimental methods of normalization or batch correction to standard topics like statistical inference or machine/statistical learning.</p>
                    {:else if tab === 4}
                        <h6>Cooperation and joint project development</h6>
                        <p>Genos is also an active research organization. On the basis of the recommendation of the National Science Council, the Ministry of Science, Education and Sports of the Republic of Croatia issued a permit that allowed Genos to formally register as a research organization in 2007. Genos currently participates in six FP7 projects (GlycoBioM, HighGlycan, IBD-BIOM, MIMOmics, Pain-OMICS and HTP-GlycoMet).</p>
                        <p>We are constantly in search of potential collaborative projects where we can contribute with our expertise in high-throughput glycomics and extensive experience of participation in large FP7 and H2020 consortia.</p>
                    {/if}
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
