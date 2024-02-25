<script lang="ts">
	import type { PageData } from './$types';
	import { io } from '$lib/webSocketConnection';
	import UniCrews from '$lib/overlays/uniCrews.svelte';
	import type { Scoreboard } from '$lib/types/scoreboard';
	import { OVERLAY_STYLES } from '$lib/types/overlayStles';

	export let data: PageData;
	let scoreboard = data.scoreboard;

	io.on('scoreboard', (wsScoreBoard: Scoreboard) => {
		console.log('something happened');
		scoreboard = wsScoreBoard;
	});
</script>

{#if scoreboard.overlayStyle == OVERLAY_STYLES.UNICREWS}
	<UniCrews {scoreboard} />
{/if}
