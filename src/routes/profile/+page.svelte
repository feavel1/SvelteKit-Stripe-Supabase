<script lang="ts">
	export let data;
	let { session } = data;
	$: ({ session } = data);
</script>

<h1 class="h1">Profile Overview</h1>
<section>
	{#if !session}
		<div>Not logged in</div>
		<a href="/auth" class="border-l-pink-200 btn variant-filled">Return to login</a>
	{:else}
		<div class="card mb-4">
			<h1 class="card-header h3">Current plan:</h1>
			<p class="card-footer">SVIP</p>
		</div>

		<div class="card mb-4">
			<h1 class="card-header h3">Logged in as:</h1>
			<p class="card-footer">
				{session.user.email}
			</p>
		</div>

		<a href="/profile/settings" class="btn variant-filled-primary">Settings</a>

		<details>
			<summary>More data in: session.user</summary>
			<pre class="pre">{JSON.stringify(session.user, null, 2)}</pre>
		</details>
	{/if}
</section>
