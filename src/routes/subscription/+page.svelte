<script lang="ts">
	import Subscription from '$lib/components/ui/Subscription.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	let { session, subscription, products } = data;
	$: ({ session } = data);
</script>

<h1 class="h1 font-thin">Subscription Page</h1>

<Subscription {products} {subscription} {session} />
