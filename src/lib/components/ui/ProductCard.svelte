<script lang="ts">
	export let product: any;
</script>

<section class="card w-full block card-hover variant-glass-primary">
	<div class="p-4 space-y-4">
		<h1 class="h1">{product.name}</h1>
		<div class="grid grid-cols-3 gap-8">
			<div>Price: ¥{product.price}</div>
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
		<div class="grid grid-cols-4 gap-4">
			<div class="placeholder h-full" />
			<div class="placeholder h-full" />
			<div class="placeholder h-full" />
			<div class="btn variant-filled-primary">Cart</div>
		</div>
	</div>
</section>
