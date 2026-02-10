<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import { page } from "$app/state";
	// const PUBLIC_CONVEX_URL = page.data.env.PUBLIC_CONVEX_URL;
	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from "convex-svelte";

	let { children } = $props();

	setupConvex(PUBLIC_CONVEX_URL);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
