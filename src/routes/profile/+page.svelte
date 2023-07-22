<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};
</script>

<h1 class="h1">Account Page</h1>
<section>
	{#if !session}
		<div>Not logged in</div>
		<a href="/auth" class="border-l-pink-200 btn variant-filled">Return to login</a>
	{:else}
		<a href="/profile/settings">Settings</a>
		<CodeBlock language="bash" code={`Located at src/routes/profile.`} />
		<div>Logged in as: {session.user.email}</div>
		<div class="block">
			<p>user:</p>
			<pre class="pre">{JSON.stringify(session.user, null, 2)}</pre>
		</div>
		<button class="btn variant-filled" on:click={handleSignOut}>Sign out</button>
	{/if}
</section>
