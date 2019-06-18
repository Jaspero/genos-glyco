<script>

    function sendForm(event) {

    const formEl = document.querySelector('#form');
    const contactForm = document.querySelector('input, textarea');

            const data = {};
            event.preventDefault();

            if (formEl.checkValidity()) {
              for (let i = 0; i < contactForm.length; i++) {
                  data[contactForm[i].getAttribute('name')] = contactForm[i].value
              }

               fetch(`https://api.jaspero.club/api/v1/p/genos/contact/create`, {
                 method: 'POST',
                 headers: {
                   'Content-Type': 'application/json; charset=utf-8'
                 },
                 body: JSON.stringify(data)
               })
               .then(() => {
                   formEl.reset()
               })
            }


    }

</script>

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
    <div class="col-6 col-s-12 flex fd-col m-b-m">
        <a class="link" href="https://www.google.com/maps/place/Genos+DNA+laboratorij+d.o.o./@45.819438,16.020512,15z/data=!4m2!3m1!1s0x0:0xe1b9f7b230482795?ved=2ahUKEwiAydKcq87eAhWkK8AKHXWvCWsQ_BIwCnoECAYQCA" target="_blank" rel="noopener">Borongajska cesta 83h, 10000 Zagreb</a>
            <div class="p-y-xs">
              <a class="link" href="tel:+38516471181">+385 1 647 1181</a><br>
              <a class="link" href="tel:+38516471182">+385 1 647 1182</a><br>
              <a class="link" href="tel:+38516471169">Fax: +385 1 647 1169</a>
            </div>
        <a class="link" href="mailto:info@genos-glyco.com">info@genos-glyco.com</a>
    </div>
    <form id="form" class="col-6 col-s-12">
      <label>
        <p>Your name</p>
        <input name="name" type="text">
      </label>
      <label>
          <p>Your email</p>
          <input name="email" type="email">
            </label>
            <label>
                <p>Your message</p>
                <textarea name="message" id=""></textarea>
              </label>
            <button class="gg-button" on:click={sendForm}>Send</button>
    </form>
  </div>
</section>
