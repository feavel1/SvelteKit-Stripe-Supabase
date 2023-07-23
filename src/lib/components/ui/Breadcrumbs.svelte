<script lang="ts">
	export let path: string;
	let crumbs: Array<{ label: string; href: string }> = [];

	$: {
		// Remove zero-length tokens.
		const tokens = path.split('/').filter((t) => t !== '');

		// Create { label, href } pairs for each token.
		let tokenPath = '';
		crumbs = tokens.map((t) => {
			tokenPath += '/' + t;
			t = t.charAt(0).toUpperCase() + t.slice(1);
			return {
				label: t,
				href: tokenPath
			};
		});

		// Add a way to get home too.
		crumbs.unshift({ label: 'Home', href: '/' });
	}
</script>

<ol class="breadcrumb">
	{#each crumbs as crumb, i}
		{#if i == crumbs.length - 1}
			<li class="crumb">
				{crumb.label}
			</li>
		{:else}
			<li class="crumb"><a class="anchor" href={crumb.href}>{crumb.label}</a></li>
			<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		{/if}
	{/each}
</ol>
