<script lang="ts">
	import type { Scoreboard } from '$lib/types/scoreboard';
	import { io } from '$lib/webSocketConnection';
	import type { PageData } from './$types';

	export let data: PageData;
	let scoreboard: Scoreboard = data.scoreboard;
	io.emit('message', scoreboard);
</script>

<form method="POST" class="flex flex-col">
	<label>
		Round
		<input name="round" type="text" value={scoreboard?.round ?? ''} class="border border-black" />
	</label>
	<label>
		Player 1
		<input
			name="player1"
			type="text"
			value={scoreboard?.player1 ?? ''}
			class="border border-black"
		/>
	</label>
	<label>
		Player 2
		<input
			name="player2"
			type="text"
			value={scoreboard?.player2 ?? ''}
			class="border border-black"
		/>
	</label>
	<label>
		Event
		<input name="event" type="text" value={scoreboard?.event ?? ''} class="border border-black" />
	</label>
	<label>
		Game
		<input name="game" type="text" value={scoreboard?.game ?? ''} class="border border-black" />
	</label>
	<button class="border border-black">Update</button>
</form>
