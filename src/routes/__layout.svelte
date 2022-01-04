<script>
	import { onMount } from 'svelte';

	// 4kek
	let scrollY;
	
	// for main menu
	let menuOpened = false;

	// for page transition
	let fadingIn = undefined;
	let fadingOut = undefined;
	
	// for page transition
	onMount(() => {
		fadingIn = true;
		fadingOut = false;
		
		setTimeout(() => {
			fadingIn = false;
		}, 1000);
	});

	// for page transition
	function navigate(e){
		e.preventDefault();

		if (!fadingIn && !fadingOut){
			fadingOut = true;

			setTimeout(() => {
				window.location = e.srcElement.href;
				fadingIn = true;
				fadingOut = false;
			}, 1000);
		}
	}

	// for main menu
	$: if (menuOpened) {
    try {
      document.body.classList.add('scroll-disabled');
    } catch (e) {}
  } else {
    try {
      document.body.classList.remove('scroll-disabled');
    } catch (e) {}
  }
</script>

<svelte:window bind:scrollY={scrollY}/>

<div class="opening-courtain" class:fadingIn={(fadingIn == true) || (fadingIn == undefined)}></div>

<div class="closing-courtain" class:fadingOut></div>

<a on:click={navigate} href="/" class="logo-icon">
	<img src="/images/genos-icon.svg" alt="Genos" width="48" height="48" class="logo-icon-image">
</a>

<span class="logo-text">GENOS</span>

<button on:click={() => menuOpened = !menuOpened} class="menu-button" aria-label="Menu">
	<svg viewBox="0 0 56 62" fill="#032130" width="48" height="48" class="menu-button-icon" style="transform: rotate({scrollY * .5}deg);" class:menuOpened>
		<path d="M24 1.3094C26.4752 -0.119662 29.5248 -0.119661 32 1.3094L51.7128 12.6906C54.188 14.1197 55.7128 16.7607 55.7128 19.6188V42.3812C55.7128 45.2393 54.188 47.8803 51.7128 49.3094L32 60.6906C29.5248 62.1197 26.4752 62.1197 24 60.6906L4.28719 49.3094C1.81198 47.8803 0.287188 45.2393 0.287188 42.3812V19.6188C0.287188 16.7607 1.81198 14.1197 4.28719 12.6906L24 1.3094Z"/>
	</svg>
	<div class="menu-button-line-top" class:menuOpened></div>
	<div class="menu-button-line-bottom" class:menuOpened></div>
</button>

<aside class="menu" class:menuOpened>
	<hr class="menu-copyright-line" class:menuOpened>
	<hr class="menu-central-line" class:menuOpened>
	<hr class="menu-social-line" class:menuOpened>
	<span class="menu-copyright" class:menuOpened>© 2022 — Genos Glyco</span>
	<div class="menu-info">
		<span class="menu-info-item" class:menuOpened>info@genos-glyco.com</span>
		<span class="menu-info-item" class:menuOpened>+385 1 647 1181</span>
		<span class="menu-info-item" class:menuOpened>+385 1 647 1182</span>
		<span class="menu-info-item" class:menuOpened>Borongajska cesta 83h</span>
		<span class="menu-info-item" class:menuOpened>10000 Zagreb</span>
		<span class="menu-info-item" class:menuOpened>Croatia</span>
	</div>
	<div class="menu-nav">
		<div class="menu-nav-item" class:menuOpened>
			<a class="menu-nav-item-inner" on:click={navigate} href="/">home</a>
		</div>
		<div class="menu-nav-item" class:menuOpened>
			<a class="menu-nav-item-inner" on:click={navigate} href="/about">about</a>
		</div>
		<div class="menu-nav-item" class:menuOpened>
			<a class="menu-nav-item-inner" on:click={navigate} href="/services">services</a>
		</div>
		<div class="menu-nav-item" class:menuOpened>
			<a class="menu-nav-item-inner" on:click={navigate} href="/projects">projects</a>
		</div>
		<div class="menu-nav-item" class:menuOpened>
			<a class="menu-nav-item-inner" on:click={navigate} href="/publications">publications</a>
		</div>
	</div>
	<div class="menu-request" class:menuOpened>
		<a class="menu-request-inner" on:click={navigate} href="/request">Submit free request</a>
	</div>
	<span class="menu-social" class:menuOpened>
		<a class="menu-social-inner" target="_blank" href="">Twitter</a> — <a class="menu-social-inner" target="_blank" href="">LinkedIn</a>
	</span>
</aside>

<main>
	<slot></slot>
</main>

<style>
	/* logo icon */
	.logo-icon {
		position: fixed;
		z-index: 8;
		margin: 2rem;
		top: 0;
		left: 0;
	}
	.logo-icon-image {
		display: block;
	}

	/* logo text */
	.logo-text {
		display: block;
		padding: 2rem;
		font-weight: bold;
		font-size: 2rem;
		line-height: 1.5;
		text-align: center;
	}

	/* menu button */
	.menu-button {
		position: fixed;
		z-index: 8;
		top: 0;
		right: 0;
		padding: 0;
		margin: 2rem;
		font-size: inherit;
		background: none;
		border: none;
		cursor: pointer;
		transition: .3s;
	}
	.menu-button:hover {
		transform: scale(1.05) translateX(-.2rem) translateY(-.2rem);
		filter: drop-shadow(.2rem .2rem #FF8000);
	}
	.menu-button-icon {
		display: block;
	}
	.menu-button-icon.menuOpened {
		fill: white;
	}
	.menu-button-line-top {
		position: absolute;
		width: 1.25rem;
		height: .15rem;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background: white;
		transition: .3s;
		transform: translateY(-.25rem);
	}
	.menu-button-line-top.menuOpened {
		background: black;
		transform: translateY(0) rotate(-135deg);
	}
	.menu-button-line-bottom {
		position: absolute;
		width: 1.25rem;
		height: .15rem;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background: white;
		transition: .3s;
		transform: translateY(.25rem);
	}
	.menu-button-line-bottom.menuOpened {
		background: black;
		transform: translateY(0) rotate(135deg);
	}

	/* menu */
	.menu {
		display: flex;
		flex-wrap: wrap;
		position: fixed;
		z-index: 7;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		color: white;
		background: #032130;
		overflow: auto;
		transition: .7s;
		visibility: hidden;
		opacity: 0;
	}
	.menu.menuOpened {
		visibility: visible;
		opacity: 1;
	}
	.menu-copyright-line {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 7rem;
		border: 0;
		border-left: 1px solid white;
		transform-origin: top;
		transition: .7s;
		transform: scaleY(0);
	}
	.menu-copyright-line.menuOpened {
		transition-delay: .1s;
		transform: scaleY(1);
	}
	.menu-central-line {
		position: absolute;
		top: 1rem;
		left: 0;
		right: 0;
		bottom: 8rem;
		margin: auto;
		width: 0;
		border: 0;
		border-left: 1px solid white;
		transform-origin: top;
		transition: .7s;
		transform: scaleY(0);
	}
	.menu-central-line.menuOpened {
		transition-delay: .2s;
		transform: scaleY(1);
	}
	.menu-social-line {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 7rem;
		border: 0;
		border-left: 1px solid white;
		transform-origin: top;
		transition: .7s;
		transform: scaleY(0);
	}
	.menu-social-line.menuOpened {
		transition-delay: .3s;
		transform: scaleY(1);
	}
	.menu-copyright {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		writing-mode: sideways-lr;
		line-height: 3rem;
		padding: 2rem;
		transition: .7s;
		opacity: 0;
		transform: translateY(-2rem);
	}
	.menu-copyright.menuOpened {
		transition-delay: .4s;
		opacity: 1;
		transform: translateY(0);
	}
	.menu-info {
		flex: 0 1 50%;
		padding: 7rem 2rem 2rem 7rem;
		display: flex;
		flex-direction: column;
		text-align: right;
		justify-content: center;
		font-size: 2rem;
	}
	.menu-info-item {
		line-height: 1.5;
		transition: .7s;
		opacity: 0;
		transform: translateX(-2rem);
	}
	.menu-info-item.menuOpened {
		opacity: 1;
		transform: translateX(0);
	}
	.menu-info-item.menuOpened:nth-child(1) { transition-delay: .5s; }
	.menu-info-item.menuOpened:nth-child(2) { transition-delay: .54s; }
	.menu-info-item.menuOpened:nth-child(3) { transition-delay: .58s; }
	.menu-info-item.menuOpened:nth-child(4) { transition-delay: .62s; }
	.menu-info-item.menuOpened:nth-child(5) { transition-delay: .66s; }
	.menu-info-item.menuOpened:nth-child(6) { transition-delay: .7s; }
	.menu-info-item:nth-child(1) { margin-bottom: 1.5rem; }
	.menu-info-item:nth-child(3) { margin-bottom: 1.5rem; }
	.menu-nav {
		flex: 0 1 50%;
		padding: 7rem 7rem 2rem 2rem;
		display: flex;
		flex-direction: column;
		text-align: left;
		justify-content: center;
		font-size: 3rem;
	}
	.menu-nav-item {
		font-weight: bold;
		line-height: 1.5;
		transition: .7s;
		opacity: 0;
		transform: translateX(2rem);
	}
	.menu-nav-item.menuOpened {
		opacity: 1;
		transform: translateX(0);
	}
	.menu-nav-item.menuOpened:nth-child(1) { transition-delay: .5s; }
	.menu-nav-item.menuOpened:nth-child(2) { transition-delay: .55s; }
	.menu-nav-item.menuOpened:nth-child(3) { transition-delay: .6s; }
	.menu-nav-item.menuOpened:nth-child(4) { transition-delay: .65s; }
	.menu-nav-item.menuOpened:nth-child(5) { transition-delay: .7s; }
	.menu-nav-item-inner {
		color: white;
		transition: .2s;
	}
	.menu-nav-item-inner:hover {
		color: #FFD400;
	}
	.menu-request {
		margin: auto 7rem 0;
		flex: 0 1 100%;
		position: relative;
		font-size: 2rem;
		transition: .7s;
		opacity: 0;
	}
	.menu-request.menuOpened {
		transition-delay: .5s;
		opacity: 1;
	}
	.menu-request::after {
		content: '';
		position: absolute;
		top: 5rem;
		left: 0;
		right: 0;
		margin: auto;
		width: 14ch;
		height: .5rem;
		background: #032130;
		transition: .7s;
		transform: scaleX(0);
	}
	.menu-request.menuOpened::after {
		transition-delay: 1s;
		transform: scaleX(1);
	}
	.menu-request-inner {
		display: block;
		text-align: center;
		background: #FFD400;
		color: #032130;
		font-weight: bold;
		text-decoration: none;
		line-height: 1.5;
		padding: 2rem 0;
		transition: .2s;
	}
	.menu-request-inner:hover {
		background: #FFF;
	}
	.menu-social {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		writing-mode: sideways-rl;
		text-align: right;
		line-height: 3rem;
		padding: 2rem;
		transition: .7s;
		opacity: 0;
		transform: translateY(-2rem);
	}
	.menu-social.menuOpened {
		transition-delay: .8s;
		opacity: 1;
		transform: translateY(0);
	}
	.menu-social-inner {
		color: #FFF;
	}
	.menu-social-inner:hover {
		color: #FFD400;
	}

	/* opening courtain */
	.opening-courtain {
		position: fixed;
		z-index: 9;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #032130;
		transform: translateY(100%);
		transition: 1s;
	}
	.opening-courtain.fadingIn {
		transform: translateY(0);
	}

	/* closing courtain */
	.closing-courtain {
		position: fixed;
		z-index: 9;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #032130;
		transform: translateY(-100%);
		transition: 1s;
	}
	.closing-courtain.fadingOut {
		transform: translateY(0);
	}

	@media (max-width: 1040px) {
		.logo-icon {
			margin: 1.5rem;
		}
		.logo-icon-image {
			width: 2rem;
			height: 2rem;
		}

		.logo-text {
			font-size: 1rem;
		}

		.menu-button {
			margin: 1.5rem;
		}
		.menu-button-icon {
			width: 2rem;
			height: 2rem;
		}
		.menu-button-line-top {
			width: .8rem;
			height: .1rem;
			transform: translateY(-.15rem);
		}
		.menu-button-line-bottom {
			width: .8rem;
			height: .1rem;
			transform: translateY(.15rem);
		}

		.menu {
			flex-direction: column;
			flex-wrap: nowrap;
		}
		.menu-copyright-line {
			position: fixed;
			left: 5rem;
		}
		.menu-central-line {
			display: none;
		}
		.menu-social-line {
			position: fixed;
			right: 5rem;
		}
		.menu-copyright {
			position: fixed;
			line-height: 2rem;
			padding: 1.5rem;
		}
		.menu-info {
			order: 3;
			font-size: 1rem;
			flex: unset;
			text-align: left;
			padding: 1rem 6rem;
			margin-bottom: auto;
		}
		.menu-nav {
			order: 2;
			font-size: 1.5rem;
			flex: unset;
			padding: 1rem 6rem;
		}
		.menu-request {
			order: 1;
			flex: unset;
			font-size: 1rem;
			margin: 5rem 5rem 1rem;
		}
		.menu-request::after {
			top: 3.5rem;
			height: .35rem;
		}
		.menu-social {
			position: fixed;
			line-height: 2rem;
			padding: 1.5rem;
		}
	}
</style>