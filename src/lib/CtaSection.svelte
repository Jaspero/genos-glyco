<section>
  <p>If you're interested in working with us or using our services, submit a request for free and we'll schedule a meeting to discuss your ideas.</p>
  <button>Submit free request</button>
</section>

<style>
  section {
    padding: 7rem;
    background: #032130;
  }
  p {
    color: white;
    font-weight: bold;
    font-size: clamp(1rem, 4vw, 4rem);
    line-height: 1.35;
    max-width: 22ch;
    margin: 1em auto;
    text-align: center;
  }
  button {
    position: relative;
    background: #FFD400;
    color: #032130;
    font-size: clamp(1rem, 4vw, 4rem);
    font-family: inherit;
    font-weight: bold;
    border: none;
    width: 100%;
    padding: 1em;
    max-width: 22ch;
    margin: 0 auto 1em;
    display: block;
    cursor: pointer;
    transition: .4s;
  }
  button:hover {
    background: #E58D19;
  }
  button::after {
    content: '';
    position: absolute;
    top: calc(50% + .75em);
    left: 0;
    right: 0;
    margin: 0 auto;
    height: .2em;
    width: 14ch;
    background: #032130;
    transition: .4s;
  }
  button:hover::after {
    transform: scaleX(0);
  }
  @media (max-width: 1040px){
    section {
      padding: 2rem;
    }
  }
</style>