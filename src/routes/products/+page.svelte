<script lang="ts">
	import ProductCard from '$lib/components/ui/ProductCard.svelte';

	const products = [
		{
			id: 'price_1McfalGEQ8u28rQ5BZ8bAlqT',
			name: 'Coffee',
			price: 5
		},
		{
			id: 'price_1McfbuGEQ8u28rQ5mEO9kZeB',
			name: 'Sunglasses',
			price: 10
		},
		{
			id: 'price_1McfcaGEQ8u28rQ56pMnyDz1',
			name: 'Water Bottle',
			price: 15
		}
	];
</script>

<h1 class="h1">Products Page</h1>

<div class="grid grid-cols-3 gap-3">
	{#each products as product}
		<ProductCard {product} />
	{/each}
</div>
