<script>

import ScrollCta from "$lib/ScrollCta.svelte";
</script>

<div class="hero">
    <div class="hero-title">
        <img class="hero-title-ellipse" src="/images/services/ellipse.png" alt="">
        <h1 class="hero-title-text">GENOS <br></h1>
        <img class="hero-title-image" src="/images/services/services.png" alt="">
    </div>
    <p class="hero-text">
        With over 20 large collaborative projects conducted with scientific teams from different research centers from around the world, we have the expertise to design studies and bring them to a successful conclusion.
    </p>
    <div class="hero-characteristics">
        <div>
            <img src="/images/services/flexibility.png" alt="">
            <div class="hero-characteristics-title">Flexibility</div>
            <p class="hero-characteristics-text">
                We offer a wide range of bespoke lab services. We bring experience in all of them.
            </p>
        </div>
        <div>
            <img src="/images/services/scalability.png" alt="">
            <div class="hero-characteristics-title">Scalability</div>
            <p class="hero-characteristics-text">
                Our technology and connections allows us to work on projects of any size and scale.
            </p>
        </div>
        <div>
            <img src="/images/services/expertise.png" alt="">
            <div class="hero-characteristics-title">Expertise</div>
            <p class="hero-characteristics-text">
                The mixture of expertise from our team ensures the quality of service in all areas.
            </p>
        </div>
    </div>
    <ScrollCta />
</div>

<style>
    /* hero */
    .hero {}
    .hero-title {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 10rem;
    }
    .hero-title-ellipse {
        position: absolute;
        left: 0;
        bottom: -6.5rem;
        height: 500px;
    }
    .hero-title-text {
        position: relative;
        font-size: 6rem;
    }
    .hero-title-image {
        height: 18rem;
    }
    .hero-title-text::after {
        content: 'services';
        color: #4095BF;
    }
    .hero-text {
        z-index: 1;
        position: relative;
        font-size: 2rem;
        max-width: 36ch;
        margin: -6rem 10rem 10rem auto;
    }
    .hero-characteristics {
        display: grid;
        grid-gap: 4em;
        grid-template-columns: repeat(3, 1fr);
        padding: 0 10rem;
        margin-bottom: 10rem;
    }
    .hero-characteristics-title {
        margin: 4rem 0 .5rem;
        font-size: 2rem;
    }
    .hero-characteristics-text {
        font-size: 1.25rem;
    }
</style>