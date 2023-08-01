<script>
	let tableArr = [
		{ Task: 'Setup', Date: '07-23', Progress: '100%', weight: '10%' },
		{ Task: 'UI', Date: '07-23', Progress: '50%', weight: '123' },
		{ Task: 'top', Date: 'cool', Progress: '123', weight: '123' },
		{ Task: 'top', Date: 'cool', Progress: '123', weight: '123' }
	];
	let totalWeight = '100';
</script>

<h1 class="h1 font-thin">About</h1>
<p>A Svelte, Supabase, Stripe, SkeletonUI starter.</p>
<section>
	<div class="logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-0.5">
		<a href="https://kit.svelte.dev/" class="logo-item">SvelteKit</a>
		<a href="https://tailwindcss.com/" class="logo-item">Tailwind</a>
		<a href="https://github.com/feavel1" class="logo-item">GitHub</a>
		<a href="https://www.skeleton.dev" class="logo-item">Skeleton</a>
		<a href="https://www.supabase.com" class="logo-item">Supabase</a>
		<a href="https://www.stripe.com" class="logo-item">Stripe</a>
		<a href="https://www.vercel.com" class="logo-item">Vercel</a>
		<a href="https://kit.svelte.dev" class="logo-item">Type Script</a>
	</div>
</section>

<h1 class="h1 font-thin">A demo table for fun</h1>
<p>A Svelte, Supabase, Stripe, SkeletonUI starter.</p>
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Task</th>
				<th>Date</th>
				<th>Progress</th>
				<th>Weight</th>
			</tr>
		</thead>
		<tbody>
			{#each tableArr as row, i}
				<tr>
					<td>{row.Task}</td>
					<td>{row.Date}</td>
					<td>{row.Progress}</td>
					<td>{row.weight}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th colspan="3">Calculated Total Weight</th>
				<td>{totalWeight}</td>
			</tr>
		</tfoot>
	</table>
</div>
