<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let user = data.userdata;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};
</script>

{#if user != null}
	<div class="card max-w-3xl mx-auto p-3">
		<form method="POST" class="flex flex-col gap-2" action="?/updateUser">
			<div class="field">
				<label for="full_name" class="label">Full Name</label>
				<p class="control">
					<input
						id="full_name"
						name="full_name"
						class="input"
						type="text"
						value={user.full_name}
						required
					/>
				</p>
			</div>
			<div class="field">
				<label for="username" class="label">Username</label>
				<p class="control">
					<input
						id="username"
						name="username"
						class="input"
						type="text"
						value={user.username}
						required
					/>
				</p>
			</div>

			<div class="field">
				<label for="address" class="label">Address</label>
				<p class="control">
					<input
						id="address"
						name="address"
						class="input"
						type="text"
						value={user.billing_address}
						required
					/>
				</p>
			</div>
			<div class="mx-auto">
				<button class="btn btn-filled-primary">Save</button>
			</div>
		</form>
	</div>

	<button class="btn variant-filled" on:click={handleSignOut}>Sign out</button>

	<details>
		<summary>More data in: session.user</summary>
		<pre class="pre">{JSON.stringify(session?.user, null, 2)}</pre>
	</details>
{:else}
	<div>Return</div>
{/if}
