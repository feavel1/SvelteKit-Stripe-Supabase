<script>
	import { goto } from '$app/navigation';

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	if (session) {
		goto('/profile');
	}
	/**
	 * @type {string}
	 */
	let email;

	/**
	 * @type {string}
	 */
	let password;

	let loading = false;

	const handleSignIn = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			if (error) throw error;
			alert('Login successfully, visit your home page❤️!');
			goto('/profile');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	const handleSignUp = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					emailRedirectTo: `${location.origin}/auth/callback`
				}
			});
			if (error) throw error;
			alert('Your email must be verified, go check your email❤️!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<form>
	<label>
		<span>Email</span>
		<input class="input" name="email" bind:value={email} />
	</label>
	<label>
		<span>Password</span>
		<input class="input" type="password" name="password" bind:value={password} />
	</label>
</form>

<div class="btn-group variant-filled">
	<button on:click|preventDefault={handleSignIn} disabled={loading}>Sign in</button>
	<button on:click|preventDefault={handleSignUp} disabled={loading}>Sign Up</button>
</div>
