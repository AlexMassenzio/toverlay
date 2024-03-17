<script lang="ts">
	import type { PageData } from './$types';
	import { io } from '$lib/webSocketConnection';
	import type { Scoreboard } from '$lib/types/scoreboard';
	import { OVERLAY_STYLES } from '$lib/types/overlayStyle';
	import FightCard from '$lib/overlays/fightCard.svelte';
	import { GAMES } from '$lib/types/game';
	import Uni from '$lib/overlays/uni.svelte';
	import Tekken from '$lib/overlays/tekken.svelte';

	export let data: PageData;
	let scoreboard = data.scoreboard;

	io.on('scoreboard', (wsScoreBoard: Scoreboard) => {
		console.log('something happened');
		scoreboard = wsScoreBoard;
	});
</script>

{#if scoreboard.game == GAMES.UNI}
	<Uni {scoreboard} />
{:else if scoreboard.game == GAMES.TEKKEN}
	<Tekken {scoreboard} />
{:else if scoreboard.overlayStyle == OVERLAY_STYLES.FIGHT_CARD}
	<FightCard />
{/if}
