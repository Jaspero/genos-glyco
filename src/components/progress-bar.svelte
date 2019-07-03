<script src="ProgressBar.min.js"></script>
<script>
    const progress = new ProgressBar({
	    target: document.querySelector('body'),
	    data: { color: '#0366d6' }
    });

    const router = 'home';

    router.on('stateChangeStart', () => {
	    progress.start()
    });
    router.on('stateChangeEnd', () => {
	    progress.complete()
    })
</script>
