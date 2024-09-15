<script lang="ts">
	import type { PageData } from './$types';
	import { io } from '$lib/webSocketConnection';
	import type { Scoreboard } from '$lib/types/scoreboard';
	import { OVERLAY_STYLES } from '$lib/types/overlayStyle';
	import FightCard from '$lib/overlays/fightCard.svelte';
	import { GAMES } from '$lib/types/game';
	import Uni from '$lib/overlays/uni.svelte';
	import Tekken from '$lib/overlays/tekken.svelte';
	import GBVSR from '$lib/overlays/gbvsr.svelte';
	import { fade } from 'svelte/transition';
	import { defualtTransitionConfig } from '$lib/transitionConfigs';

	export let data: PageData;
	let scoreboard = data.scoreboard;

	io.on('scoreboard', (wsScoreBoard: Scoreboard) => {
		console.log('something happened');
		scoreboard = wsScoreBoard;
	});
</script>

{#if scoreboard.game == GAMES.UNI}
	<section transition:fade={defualtTransitionConfig}>
		<Uni {scoreboard} />
	</section>
{:else if scoreboard.game == GAMES.TEKKEN}
	<section transition:fade={defualtTransitionConfig}>
		<Tekken {scoreboard} />
	</section>
{:else if scoreboard.game == GAMES.GBVSR}
	<section transition:fade={defualtTransitionConfig}>
		<GBVSR {scoreboard} />
	</section>
{:else if scoreboard.overlayStyle == OVERLAY_STYLES.FIGHT_CARD}
	<FightCard />
{/if}
