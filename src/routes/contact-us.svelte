<script></script>

<style>
.gg-services-intro {
  padding: 200px 0 60px;
  background-image: url("/assets/images/section-services.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
label {
display: block;
margin-bottom: 1em;
}
label p {
font-size:12px;
}
label input,
label textarea {
display: block;
width: 100%;
max-width: 400px;
padding: 10px;
border: 1px solid #ccc;
font-size: inherit;
font-family: inherit;
}
</style>

<svelte:head>
	<title>Contact us</title>
	<meta name="description" content="Contact us">
</svelte:head>

<!--Services intro-->
<section class="gg-services-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">Contact us</h4>
    </div>
  </div>
</section>





<!--Services-->
<section class="p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">Send us a message</h4>
    </div>
    <form class="col-12">
      <label>
        <p>Your name</p>
        <input type="text">
      </label>
      <label>
          <p>Your email</p>
          <input type="email">
            </label>
            <label>
                <p>Your message</p>
                <textarea name="" id=""></textarea>
              </label>
            <button class="gg-button">Send</button>
    </form>
  </div>
</section>
