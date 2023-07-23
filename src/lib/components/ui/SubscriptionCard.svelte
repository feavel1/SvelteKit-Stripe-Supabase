<script lang="ts">
	export let price: String;
</script>

<section class="card w-full block card-hover variant-glass-primary">
	<div class="p-4 space-y-4">
		<h1 class="h1">¥{price} / Month</h1>
		<div class="grid grid-cols-3 gap-8">
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
		<div class="grid grid-cols-4 gap-4">
			<div class="placeholder h-full" />
			<div class="placeholder h-full" />
			<div class="placeholder h-full" />

			<div class="btn variant-filled-primary">Buy</div>
		</div>
	</div>
</section>
