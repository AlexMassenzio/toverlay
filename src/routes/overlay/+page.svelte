<script lang="ts">
	import type { PageData } from './$types';
	import { io } from '$lib/webSocketConnection';
	import UniCrews from '$lib/overlays/uniCrews.svelte';

	export let data: PageData;
	let scoreboard = data.scoreboard;

	io.on('message', (wsScoreBoard) => {
		console.log('something happened');
		scoreboard = wsScoreBoard;
	});
</script>

<UniCrews {scoreboard} />
