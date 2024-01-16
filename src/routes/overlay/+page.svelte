<script lang="ts">
	import type { PageData } from './$types';
	import { io } from 'socket.io-client';

	export let data: PageData;
	const scoreboard = data.scoreboard;

	const socket = io();

	socket.on('eventFromServer', (message) => {
		console.log(message);
	});
</script>

<div class="text-center">
	<h1 class="text-3xl">{scoreboard.event}</h1>
	<h2 class="text-2xl">{scoreboard.game} - {scoreboard.round}</h2>
	<h3 class="text-xl">{scoreboard.player1} vs {scoreboard.player2}</h3>
</div>
