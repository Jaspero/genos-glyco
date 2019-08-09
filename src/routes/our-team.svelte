<script context="module">
	export function preload({ params, query }) {
		return this.fetch('index.json')
		    .then(r => r.json())
            .then(data => ({
              ...data,
              members: data.members.map((memb, index) => ({
                ...memb,
                page: Math.floor(index / 4)
              }))
            }))
	}
</script>

<script>
    import { fade, fly } from 'svelte/transition';

    export let members;

    let dialogOpen = null;

</script>

<style>
.gg-services-intro {
  padding: 200px 0 120px;
  background-image: url("/assets/images/section-intro.jpg");
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
</style>



<svelte:head>
  <title>Our team</title>
  <meta name="description" content="Experienced team of scientists in Genos have cumulatively over 150 years of experience in glycan analysis." />
</svelte:head>

<!--Services intro-->
<section class="gg-services-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">Our team<span class="gg-icon" aria-hidden="true"><img loading="lazy" src="assets/images/icon-team.svg" alt=""></span></h4>
    </div>
  </div>
</section>

<section class="bg-l-secondary team p-y-l">
  <div class="grid p-b-m">
    <div class="col-12 flex jc-between ai-center">
      <h4 class="gg-title">Genos team</h4>
    </div>
     {#each members as member, i}
     <div class="col-3 col-m-4 col-s-6 col-xs-12 p-a-s ta-center" on:click="{() => dialogOpen = member}">
         <div class="gg-member-card">
           <div class="gg-member-avatar">
             <img loading="lazy" draggable="false" src="{member.profileImage}" width="150" alt="">
           </div>
           <p class="fw-bold m-t-s m-b-xs">{member.fullName}</p>
           {#if member.title}
           <p class="m-b-s">{member.title}</p>
           {/if}
         </div>
     </div>
     {/each}
  </div>
</section>

{#if dialogOpen}
<section class="gg-single-member-dialog" in:fade="{{duration: 200}}" out:fade="{{duration: 200}}">
    <article class="gg-single-member"  in:fly="{{y: 200, duration: 600}}">
      <div class="bg-l-secondary p-x-m p-t-l">
        <div class="gg-single-member-avatar m-b-s">
          <img loading="lazy" width="150" src={dialogOpen.profileImage} alt="">
        </div>
      </div>
      <div class="p-y-l p-x-m">
        <h6 class:m-b-s={!dialogOpen.title}>{dialogOpen.fullName}</h6>
        {#if dialogOpen.title}
        <p class="fs-small c-d-secondary m-t-xs m-b-s">{dialogOpen.title}</p>
        {/if}
        {#if dialogOpen.longBio}
         <div class="gg-read-format c-d-secondary">
           <p>{@html dialogOpen.longBio}</p>
         </div>
        {/if}
      </div>
        <button aria-label="Close dialog" class="gg-single-member-close gg-icon-button" on:click="{() => dialogOpen = null}">
            <img src="assets/images/icon-close.svg" alt="Close dialog">
        </button>
    </article>
</section>
{/if}
