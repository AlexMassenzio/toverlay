<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const scoreboard = data.scoreboard;
</script>

<div class="text-center">
	<h1 class="text-3xl">{scoreboard.event}</h1>
	<h2 class="text-2xl">{scoreboard.game} - {scoreboard.round}</h2>
	<h3 class="text-xl">{scoreboard.player1} vs {scoreboard.player2}</h3>
</div>
