<script lang="ts">
	export let session: any;
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a on:click={drawerClose} href="/">Home</a></li>
		<li><a on:click={drawerClose} href={session ? '/profile' : '/auth'}>Profile</a></li>
		<li><a on:click={drawerClose} href="/subscription">Subscription</a></li>
		<li>
			<a on:click={drawerClose} href="/products" class="font-thin">Products (work in progress)</a>
		</li>
		<li><a on:click={drawerClose} href="/about">About</a></li>
	</ul>
</nav>
