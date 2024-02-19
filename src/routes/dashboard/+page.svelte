<script lang="ts">
	import type { Scoreboard } from '$lib/types/scoreboard';
	import { io } from '$lib/webSocketConnection';
	import type { PageData } from './$types';

	export let data: PageData;
	let scoreboard: Scoreboard = data.scoreboard;
	io.emit('message', scoreboard);
</script>

<div class="h-screen w-screen bg-slate-900">
	<form method="POST" class="mx-2 flex flex-col">
		<div class="flex flex-col">
			<label for="round" class="text-sm">Round</label>
			<input
				id="round"
				name="round"
				type="text"
				value={scoreboard?.round ?? ''}
				class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
			/>
		</div>
		<div class="grid grid-cols-4">
			<div class="col-span-3 flex flex-col">
				<label for="player1Name" class="text-sm">Player 1</label>
				<input
					id="player1Name"
					name="player1Name"
					type="text"
					value={scoreboard?.player1.name ?? ''}
					class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
				/>
			</div>
			<div class="flex flex-col pl-2">
				<label for="player1Score" class="text-sm">Score</label>
				<input
					id="player1Score"
					name="player1Score"
					type="number"
					value={scoreboard?.player1.score ?? ''}
					class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
				/>
			</div>
		</div>
		<div class="grid grid-cols-4">
			<div class="col-span-3 flex flex-col">
				<label for="player2Name" class="text-sm">Player 2</label>
				<input
					id="player2Name"
					name="player2Name"
					type="text"
					value={scoreboard?.player2.name ?? ''}
					class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
				/>
			</div>
			<div class="flex flex-col pl-2">
				<label for="player2Score" class="text-sm">Score</label>
				<input
					id="player2Score"
					name="player2Score"
					type="number"
					value={scoreboard?.player2.score ?? ''}
					class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
				/>
			</div>
		</div>
		<div class="flex flex-col">
			<label for="event" class="text-sm">Event</label>
			<input
				id="event"
				name="event"
				type="text"
				value={scoreboard?.event ?? ''}
				class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
			/>
		</div>
		<div class="flex flex-col">
			<label for="game" class="text-sm">Game</label>
			<input
				id="game"
				name="game"
				type="text"
				value={scoreboard?.game ?? ''}
				class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
			/>
		</div>

		<button
			class="mt-4 w-fit self-center rounded-md border border-slate-300 bg-slate-700 p-2 text-slate-100"
			>Update</button
		>
	</form>
</div>
