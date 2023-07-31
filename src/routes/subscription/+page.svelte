<script lang="ts">
	import Subscription from '$lib/components/ui/Subscription.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	let { supabase, session, subscription, products } = data;
	$: ({ supabase, session } = data);
</script>

<h1 class="h1">Subscription Page</h1>

<Subscription {products} {subscription} {session} />
