<script lang="ts">
	import type { PageData } from './$types';
	import { io } from '$lib/webSocketConnection';
	import UniCrews from '$lib/overlays/uniCrews.svelte';
	import type { Scoreboard } from '$lib/types/scoreboard';

	export let data: PageData;
	let scoreboard = data.scoreboard;

	io.on('scoreboard', (wsScoreBoard: Scoreboard) => {
		console.log('something happened');
		scoreboard = wsScoreBoard;
	});
</script>

<UniCrews {scoreboard} />
