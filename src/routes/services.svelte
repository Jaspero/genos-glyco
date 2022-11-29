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
  <title>Services | Genos Glyco</title>
  <meta name="description" content="With over 10 years of experience in glycan analysis, experts in Genos can address even the most complex glycoprofiling tasks" />
</svelte:head>

<!--Services intro-->
<section class="gg-services-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">Services<span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-service.svg" alt=""></span></h4>
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
                        <p>Genos offers high-throughput analyses with relative quantification of N-glycans and N-glycopeptides developed and optimized for various human and rodent sample types.
                            N-glycans are released from glycoproteins by digestion with PNGaseF, fluorescently labelled with 2-AB, procainamide or APTS, purified and analysed by
                            either hydrophilic interaction ultra-high-performance liquid chromatography with fluorescence detection (HILIC-UHPLC-FLD) or capillary gel
                            electrophoresis with laser-induced fluorescence (CGE-LIF). N-glycopeptides are obtained from glycoproteins by trypsin digestion, purified and analysed by
                            C18 liquid chromatography coupled to mass spectrometry via electrospray ionization (C18-LC-ESI-MS).</p>
                        <li>Analysis of total released human serum/plasma N-glycans by HILIC-UHPLC-FLD</li>
                        <li>Analysis of total released human IgG N-glycans by HILIC-UHPLC-FLD</li>
                        <li>Analysis of subclass-specific human IgG Fc N-glycopeptides by C18-LC-ESI-MS</li>
                        <li>Analysis of total released human IgA N-glycans by HILIC-UHPLC-FLD</li>
                        <li>Analysis of subclass-specific human IgA Fc N-glycopeptides by C18-LC-ESI-MS</li>
                        <li>Analysis of human AGP N-glycopeptides by C18-LC-ESI-MS</li>
                        <li>Analysis of human C3 N-glycopeptides by C18-LC-ESI-MS</li>
                        <li>Analysis of total released mouse IgG N-glycans by HILIC-UHPLC-FLD or CGE-LIF</li>
                        <li>Analysis of subclass-specific mouse IgG N-glycopeptides by C18-LC-ESI-MS</li>
                        <li>Analysis of subclass-specific rat IgG N-glycopeptides by C18-LC-ESI-MS</li>
                    {:else if tab === 1}
                        <p>Genos offers in-depth glycoprofiling for various sample types such as biopharmaceuticals and glycoproteins purified from complex samples. Sample preparation conditions and analysis parameters are optimised for a specific sample.</p>
                        <li>Analysis of released N-glycans</li><p>N-glycans are released from glycoproteins by digestion with PNGaseF, fluorescently labelled, purified and analysed by hydrophilic interaction ultra-high-performance liquid chromatography with fluorescence detection (HILIC-UHPLC-FLD) which allows relative quantification of different glycan species. Assignment of N-glycan structures is based on HILIC retention time, accurate mass and fragmentation spectra obtained by coupling HILIC-UHPLC-FLD to mass spectrometry via electrospray ionization (ESI-MS/MS).</p>
                        <li>Site-specific N-glycosylation analysis</li> <p>N-glycopeptides are obtained from glycoproteins by protease digestion, purified and analysed by C18 liquid chromatography coupled to mass spectrometry via electrospray ionization (C18-LC-ESI-MS/MS). Relative quantification of N-glycopeptides in obtained in a site-specific manner determined by the amino acid sequence of the glycoprotein. Assignment of N-glycopeptide structures is based on accurate mass and fragmentation spectra.</p>
                        <li>N-glycosylation site occupancy analysis</li><p>Site occupancy analysis is used to calculate the occupancy of potential N-glycosylation sites by measuring the proportion of N-glycosylated peptides in total peptides. The analysis is performed by releasing N-glycans with PNGaseF in the presence of 18O water followed by protease digestion, purification and C18-LC-ESI-MS/MS.  </p>
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
