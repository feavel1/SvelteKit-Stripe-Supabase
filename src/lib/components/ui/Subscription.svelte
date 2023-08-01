<script lang="ts">
	import { goto } from '$app/navigation';
	import { getStripe } from '$lib/stripe/stripe-client';
	import { postData } from '$lib/utils/helpers';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	export let products: any, subscription: any, session: any;

	let billingInterval = 'month';

	function showPriceString(product: any, billingInterval: string) {
		const price = product?.prices?.find((price: any) => price.interval === billingInterval);
		if (!price) return null;

		const priceString = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: price.currency!,
			minimumFractionDigits: 0
		}).format((price?.unit_amount || 0) / 100);
		return priceString;
	}

	const handleCheckout = async (product: any) => {
		const price = product?.prices?.find((price: any) => price.interval === billingInterval);
		if (!price) return null;

		if (!session) {
			goto('/auth');
		}
		if (subscription) {
			goto('/profile');
		}
		try {
			const { sessionId } = await postData({
				url: '/api/stripe-checkout',
				data: { price }
			});
			const stripe = await getStripe();
			stripe?.redirectToCheckout({ sessionId });
		} catch (error) {
			return alert((error as Error)?.message);
		}
	};
</script>

<div class="max-w-lg">
	<ListBox class="bg-tertiary-900 p-3">
		<ListBoxItem bind:group={billingInterval} name="medium" value="month">Monthly</ListBoxItem>
		<ListBoxItem bind:group={billingInterval} name="medium" value="year">Yearly</ListBoxItem>
	</ListBox>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
	{#each products as product}
		<section class="card w-full block card-hover variant-glass-primary">
			<div class="p-4 space-y-4">
				<h1 class="h1 font-thin">{product.name}</h1>
				<div class="grid grid-cols-1 gap-8">
					<div class="text-">{product.description}</div>
				</div>
				<div class="flex flex-col">
					<span class="font-extrabold white text-3xl mb-2">
						{showPriceString(product, billingInterval)}
						<span class="text-base font-medium text-zinc-100 capitalize"> / {billingInterval}</span>
					</span>
					{#if subscription}
						<a class="btn variant-filled-primary" href="/profile">Manage subscription</a>
					{:else}
						<button
							on:click={() => handleCheckout(product)}
							class="btn variant-filled-primary"
							disabled={session ? false : true}
						>
							Subscribe
						</button>
					{/if}
				</div>
			</div>
		</section>
	{/each}
</div>
