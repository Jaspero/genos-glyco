<script>
  let loading = false;
  let success = false;
  let error = false;

  let serviceSelected;
  let email;

  let services = [
    ' ',
    'Sample preparation',
    'Biomarker discovery',
    'In depth glycoprofiling',
    'High-throughput analysis',
    'Data analysis',
    'Joint project development',
    'Other'
  ];

  function submit(e){
    e.preventDefault();
    loading = true;
    success = false;
    error = false;
    
    setTimeout(() => {
      loading = false;
      success = true;
      error = false;
			}, 2000);
  }
</script>

<h1>Submit <b>free request</b></h1>
<p>Fill out the form below. We'll get back to you to schedule a meeting to discuss your request in further details.</p>
<form>
  <label>
    {#if !email}<i>Enter your email address</i>{/if}
    <em>Enter your email address</em>
    <input type="email" bind:value={email}>
  </label>
  <label class="select">
    {#if serviceSelected === ' ' ? true : false}<i>What is the nature of your request</i>{/if}
    <em>What is the nature of your request</em>
    <select bind:value={serviceSelected}>
      {#each services as service, i}
        <option value={service} disabled={!i}>{service}</option>
      {/each}
    </select>
  </label>
  <span class:loading>
    {#if !success && !error}We'd love to get in touch, but this Submit button is in the way.{/if}
    {#if success}Thanks for getting in touch. We'll email you shorty.{/if}
    {#if error}Woops! There was an error in submitting your request.{/if}
  </span>
  <div>
    <aside class="finger-left" class:success></aside>
    <!-- disabled={loading} -->
    <button on:click={submit} class:loading class:error class:success>Submit</button>
    <hr class:loading class:success>
    <aside class="finger-right" class:success></aside>
  </div>
</form>

<style>
  h1 {
    font-size: clamp(1.5rem, 8vw, 8rem);
    text-align: center;
    padding: 0 1rem;
    margin: .5em 0;
  }
  b {
    color: #4095BF;
  }

  p {
    font-size: clamp(1rem, 3vw, 3rem);
    padding: 0 1rem;
    max-width: 30ch;
    text-align: center;
    margin: 1em auto 2em;
  }

  form {
    padding-bottom: 10rem;
  }
  label {
    position: relative;
    display: block;
    font-size: clamp(1rem, 3vw, 3rem);
  }
  i {
    position: absolute;
    z-index: 1;
    text-align: center;
    font-weight: bold;
    padding: 1em 1.5em;
    top: calc(50% - .4em - 1.5em);
    left: 0;
    right: 0;
    line-height: inherit;
    margin: auto;
    font-style: normal;
    user-select: none;
    pointer-events: none;
    color: #032130;
    opacity: .5;
  }
  em {
    display: none;
    text-align: center;
    font-weight: bold;
    margin: 2em auto -.5em;
    font-style: normal;
    color: #032130;
    opacity: .5;
  }
  input {
    display: block;
    margin: 1em auto;
    width: 100%;
    text-align: center;
    max-width: calc(100vw - 14rem);
    font-size: clamp(1rem, 3vw, 3rem);
    line-height: inherit;
    padding: 1em 1.5em;
    font-family: inherit;
    font-weight: bold;
    color: #4095BF;
    border: none;
    border-bottom: .2em solid #4095BF;
    background: #D9EAF2;
  }
  select {
    display: block;
    position: relative;
    margin: 1em auto;
    width: 100%;
    text-align: center;
    max-width: calc(100vw - 14rem);
    font-size: clamp(1rem, 3vw, 3rem);
    padding: 1em 1.5em;
    font-family: inherit;
    font-weight: bold;
    color: #4095BF;
    border: none;
    border-bottom: .2em solid #4095BF;
    background: url("/images/chevron-down.svg") calc(100% - .5em) 50% / .75em no-repeat, #D9EAF2;
    -webkit-appearance: none;
  }
  span {
    display: block;
    position: relative;
    max-width: 26ch;
    font-weight: bold;
    font-size: 1.5rem;
    background: #FFD400;
    padding: 2rem;
    border-radius: 1.5rem;
    filter: drop-shadow(1rem 1rem 0 #E58D19);
    margin: 4rem auto 6rem;
    transition-duration: .4s;
    transition-property: visibility, opacity;
    visibility: visible;
  }
  span.loading {
    opacity: 0;
    color: transparent;
    visibility: hidden;
    user-select: none;
  }
  span::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 3rem;
    height: 3rem;
    background: #FFD400;
    border-bottom-right-radius: 3rem;
  }
  div {
    position: relative;
    display: flex;
    align-items: flex-start;
  }
  .finger-left {
    flex: 1;
    position: relative;
    background: #E8E8E8;
    height: 8rem;
    border-radius: 0 4rem 12rem 0;
    overflow: hidden;
  }
  .finger-left::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, transparent 25%, #FF8000);
    transition: .4s;
    transform: translateX(100%);
  }
  .finger-left.success::before {
    transform: translateX(0);
  }
  .finger-left::after {
    content: '';
    position: absolute;
    z-index: 2;
    right: 0;
    top: 0;
    height: 2rem;
    width: 8rem;
    border-bottom-left-radius: 2rem;
    background: #999;
    transition: .4s;
  }
  .finger-left.success::after {
    background: #666;
  }
  button {
    display: block;
		position: relative;
    overflow: hidden;
		font-size: 2rem;
		text-align: center;
		background: #FFD400;
		color: #032130;
		font-weight: bold;
		text-decoration: none;
		line-height: 1;
    border: none;
    flex-shrink: 0;
    cursor: pointer;
    transition: .4s;
    width: 14rem;
		padding: 2rem 0;
    margin-top: -1rem;
  }
  button:hover {
    width: 11rem;
    padding: 3rem 0;
    margin-top: -2rem;
  }
  button.loading {
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    width: 4rem;
  }
  button.success {
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    width: 0;
  }
  button::after {
    content: '';
    position: absolute;
    top: calc(50% + 1.25rem);
    left: 50%;
    transform: translateX(-50%);
    height: .4rem;
    width: 5ch;
    background: #032130;
    transition: .2s;
  }
  hr {
    position: absolute;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    border-top: 10px solid #FFD400;
    border-left: 10px solid #E58D19;
    border-right: 10px solid #E58D19;
    border-bottom: 10px solid #FFD400;
    border-radius: 4rem;
    transition: .4s;
    width: 0;
    height: 0;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
  }
  hr.loading {
    z-index: 1;
    width: 4rem;
    height: 4rem;
    opacity: 1;
    visibility: visible;
    animation: loading 1s infinite;
  }
  .finger-right {
    flex: 1;
    position: relative;
    background: #E8E8E8;
    height: 8rem;
    border-radius: 4rem 0 0 12rem;
    overflow: hidden;
  }
  .finger-right::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to left, transparent 25%, #FF8000);
    transition: .4s;
    transform: translateX(-100%);
  }
  .finger-right.success::before {
    transform: translateX(0);
  }
  .finger-right::after {
    content: '';
    position: absolute;
    z-index: 2;
    right: 0;
    left: 0;
    height: 2rem;
    width: 8rem;
    border-bottom-right-radius: 2rem;
    background: #999;
  }
  .finger-right.success::after {
    background: #666;
  }
  @keyframes loading {
    to { transform: translateX(-50%) rotate(360deg); }
  }
  @media (max-width: 1040px) {
    input {
      max-width: calc(100vw - 10rem);
      padding: 1em .5em;
    }
    select {
      max-width: calc(100vw - 10rem);
      padding: 1em .5em;
    }
    i {
      display: none;
    }
    em {
      display: block;
    }
    span {
      font-size: 1rem;
    }
    .finger-left {
      height: 6rem;
      border-radius: 0 2rem 4rem 0;
    }
    .finger-left::after {
      height: 1.5rem;
      width: 6rem;
    }
    button {
      font-size: 1.5rem;
    }
    button::after {
      height: .3rem;
    }
    .finger-right {
      height: 6rem;
      border-radius: 2rem 0 0 4rem;
    }
    .finger-right::after {
      height: 1.5rem;
      width: 6rem;
    }
  }
</style>