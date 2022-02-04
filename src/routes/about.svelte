<script>
    import TeamMember from "$lib/TeamMember.svelte";
    import Cta from "$lib/Cta.svelte";
    import CtaSection from "$lib/CtaSection.svelte";
</script>

<section class="genos">
    We are <br>
    <div class="genos-letters">
        <span style="color: #4095BF">G</span>
        <span style="color: #40BFBF">E</span>
        <span style="color: #80BF40">N</span>
        <span style="color: #FFD400">O</span>
        <span style="color: #FF8000">S</span>
    </div>
</section>

<section class="lab">
    <div class="lab-title">
        <h1 class="lab-title-text">
            We are the largest glycan analysis lab <br>
        </h1>
    </div>
    <div class="lab-section">
        <img src="/images/about/building.png" alt="" class="lab-section-building">
        <img src="/images/about/lab-waves.png" alt="" class="lab-section-waves">
        <div class="lab-section-text">
            <p>
                Our journey started in 2008 where we analyzed over 1,000 individuals from the Croatian island Vis. More than 10 years later we have published over 150 research publications and completed more than 20 collaborative projects with research and commercial facilities around the world.
                <br> <br>
                Today the laboratory has the capacity for 150,000+ glycan analyses per annum and represents the majority of the glycan research in the world.
            </p>
        </div>
        <img src="/images/about/lab-triangle.png" alt="" class="lab-section-triangle">
    </div>
</section>

<section class="scientists">
    <div class="scientists-title">
        <h1 class="scientists-title-text">
            We are a team of world-class <br>
        </h1>
    </div>
</section>

<section class="quote">
    <p class="quote-text">
        Since glycans are sugars, that makes me
    </p>
    <img src="/images/about/quotemark.svg" alt="" class="quote-mark">
</section>

<section class="founder">
    <div class="founder-image">
        <img src="/images/about/gordan.png" alt="">
    </div>
    <h1 class="founder-title">Prof. Gordan Lauc</h1>
    <p class="founder-text">
        Founder & CEO
        <br><br>
        Dr. Gordan Lauc is Professor of Biochemistry and Molecular Biology at the University of Zagreb Faculty of Pharmacy and Biochemistry and founder and CEO of Genos Ltd.
        <br><br>
        He chaired a number of conferences, including the “European Science Foundation Exploratory Workshop on Glycoscience” which resulted in the creation of the “European Glycoscience Forum”.
        <br><br>
        He is a President elect of the International Glycoscience Organization and member of the Steering Committee of the European Glycoscience Forum.
    </p>
</section>

<div class="members">
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMember />
</div>

<section class="glycans">
    <div class="glycans-title">
        <h1 class="glycans-title-text">We're passionate about</h1>
    </div>
    <img src="/images/about/glycan.png" alt="" class="glycans-image">
    <p class="glycans-text">
        Glycans are the ultimate layer of complexity of life. These complex oligosaccharides change the struc-ture and function of proteins and other molecules.
        <br><br>
        The level of molecular complexity achieved by glycosylation increases the proteome diversity to a level orders of magnitude greater than any other post-translational modification.
        <br><br>
        Proteins depend on secondary modifications to maintain structural integrity and perform their fun-ction. Over half of all existing proteins are glycosyl-ated, the average mass representation of the maj-ority of proteins are glycans. All secreted proteins are glycosylated and can serve as biomarkers.
        <br><br>
        Glycans are functional effectors in a variety of conditions, but also in autoimmune and chronic diseases. They are the biomarkers of inflammation and can prognose a variety of conditions.
    </p>
</section>

<img src="/images/shared/waves-blue.svg" alt="">

<section class="passion-project">
    <h1 class="passion-project-title">Our passion project: <br></h1>
    <img src="/images/about/human-glycome.png" alt="" class="passion-project-image">
    <p class="passion-project-text">
        The Human Glycome Project is a research group that shares a common interest of defining the structures and functions of human glycome.
        <br><br>
        It’s goal is in-depth understanding of the effect that glycans have in health and disease.
        <br><br>
        Genos serves as the central hub in analysis of all human glycans.
    </p>
    <Cta color="blue" href="https://human-glycome.org/">human-glycome.org</Cta>
</section>

<img src="/images/shared/waves-green.svg" alt="">

<section class="glycanage">
    <div class="glycanage-title">
        <h1 class="glycanage-title-text">From science to product: <br></h1>
        <img src="/images/about/glycanage.png" alt="" class="glycanage-title-image">
    </div>
    <p class="glycanage-text">
        GlycanAge is a biological age testing kit (and a health improvement service). It does so through measuring number of pro and anti inflammatory glycans attached to IgG.
        <br><br>
        It aims to help people increase the number of anti-inflammatory, and reduce number of pro-inflammatory glycans.
        <br><br>
        Genos has researched glycans as a biomarker over the past 20 years, and now servers as the central hub for GlycanAge blood sample analysis.s
    </p>

    <Cta color="green" href="https://glycanage.com/">glycanage.com</Cta>
</section>

<CtaSection></CtaSection>

<style>
    /* genos */
    .genos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 6rem;
        font-weight: bold;
        min-height: 60vh;
    }
    .genos-letters {
        display: flex;
    }

    /* lab */
    .lab {}
    .lab-title {
        padding: 10rem;
        background-image: url("/images/about/lab-rectangle.png");
        margin-bottom: -15rem;
    }
    .lab-title-text {
        font-size: 6rem;
        max-width: 15ch;
    }
    .lab-title-text::after {
        content: 'in the world.';
        color: #4095BF;
    }
    .lab-section {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }
    .lab-section-building {
        position: relative;
        max-width: 70rem;
        margin-bottom: -12rem;
    }
    .lab-section-waves {
        z-index: 1;
    }
    .lab-section-text {
        width: 100%;
        padding: 5rem;
        background-color: #D9EAF2;
    }
    .lab-section-text p {
        margin-left: auto;
        max-width: 36ch;
        font-size: 2rem;
    }

    /* scientists */
    .scientists {}
    .scientists-title {
        padding: 10rem;
        background-image: url("/images/about/scientists.png");
        background-size: contain;
        background-repeat: no-repeat;
    }
    .scientists-title-text {
        font-size: 6rem;
        max-width: 11ch;
    }
    .scientists-title-text::after {
        content: 'scientists';
        color: #80BF40;
    }

    /* quote */
    .quote {
        position: relative;
        background-color: #FFD400;
        padding: 5rem;
        max-width: 45ch;
        border-radius: 2rem;
        font-weight: bold;
        margin-left: auto;
        margin-right: 10rem;
        box-shadow: 20px 20px 0 #E58D19;
    }
    .quote-text {
        font-size: 1.5rem;
    }
    .quote-text::after {
        content: ' The Sugar Daddy.';
        color: #CC5733;
    }
    .quote-mark {
        position: absolute;
        bottom: 0;
        left: 5rem;
        transform: translateY(100%);
        filter: drop-shadow( 20px 20px 0 #E58D19);
    }

    /* founder */
    .founder {
        max-width: 70%;
        margin-top: 5rem;
        margin-left: auto;
    }
    .founder-image {
        width: 25rem;
        height: 25rem;
        border-radius: 50%;
        background-color: #E5F2D9;
    }
    .founder-title {
        margin-top: 2rem;
        font-size: 5rem;
    }
    .founder-text {
        font-size: 2rem;
        max-width: 35ch;
    }

    /* members */
    .members {
        display: grid;
        grid-gap: 4em;
        grid-template-columns: repeat(4, 1fr);
        margin: 10rem auto 0 auto;
        padding: 0 5rem;
    }

    /* glycans */
    .glycans {
        margin-top: 10rem;
    }
    .glycans-title {
        padding: 8rem;
        background-image: url("/images/about/glycans-circle.png");
        background-size: contain;
        background-repeat: no-repeat;
        margin-bottom: -15rem;
    }
    .glycans-title-text {
        font-size: 6rem;
        max-width: 15ch;
    }
    .glycans-title-text::after {
        content: ' glycans';
        color: #E58D19;
    }
    .glycans-image {
        display: block;
        margin-left: auto;
        margin-right: 10rem;
    }
    .glycans-text {
        max-width: 36ch;
        font-size: 2rem;
        margin: 5rem 10rem 10rem auto;
    }

    /* passion project */
    .passion-project {
        margin: 10rem 0;
    }
    .passion-project-title {
        font-size: 6rem;
        margin-left: 10rem;
    }
    .passion-project-title::after {
        content: 'Human Glycome';
        color: #4095BF;
    }
    .passion-project-image {
        margin-top: 5rem;
    }
    .passion-project-text {
        font-size: 2rem;
        max-width: 35ch;
        margin: 10rem 10rem 7.5rem auto;
    }

    /* glycanage */
    .glycanage {
        margin-bottom: 15rem;
    }
    .glycanage-title {
        position: relative;
        padding: 10rem;
    }
    .glycanage-title-text {
        font-size: 6rem;
        max-width: 10ch;
        line-height: 1.35;
    }
    .glycanage-title-text::after {
        content: 'Glycanage';
        color: #80BF40;
    }
    .glycanage-title-image {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
    }
    .glycanage-text {
        max-width: 36ch;
        font-size: 2rem;
        margin: 3rem 10rem 7.5rem auto;
    }
</style>