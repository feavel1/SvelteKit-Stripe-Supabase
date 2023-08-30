<script lang="ts">
	// Styles and CSS

	import '../app.postcss';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import {
		AppShell,
		AppBar,
		storeHighlightJs,
		Drawer,
		initializeStores,
		getDrawerStore
	} from '@skeletonlabs/skeleton';

	storeHighlightJs.set(hljs);

	//Breadcrumbs
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';

	// Authentication on Client Side
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Navigation from '$lib/components/ui/Navigation.svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}
	function drawerClose(): void {
		drawerStore.close();
	}

	$: classesSidebar = $page.url.pathname === '/' ? 'w-0' : 'w-0 lg:w-64';
</script>

<Drawer>
	<h2 class="p-4">
		<button class="lg:hidden btn btn-sm mr-4 variant-filled-secondary" on:click={drawerClose}>
			<span> X </span>
		</button>4S Stack Navigation
	</h2>
	<hr />
	<Navigation {session} />
</Drawer>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64" {classesSidebar}>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase">4S</strong>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation {session} />
	</svelte:fragment>
	<div class="container mx-auto p-8 space-y-8">
		<Breadcrumbs path={$page.url.pathname} />
		<hr />
		<slot />
	</div>
</AppShell>
