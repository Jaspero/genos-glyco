<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`news/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { item: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let item;
</script>
