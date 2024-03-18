<script lang="ts">
	import CrewBattleDashboard from '$lib/dashboardStyles/crewBattleDashboard.svelte';
	import { type Action } from '$lib/types/action';
	import { GAMES } from '$lib/types/game';
	import { OVERLAY_STYLES } from '$lib/types/overlayStyle';
	import type { Scoreboard } from '$lib/types/scoreboard';
	import { io } from '$lib/webSocketConnection';
	import type { PageData } from './$types';

	export let data: PageData;
	let scoreboard: Scoreboard = data.scoreboard;
	io.emit('scoreboard', scoreboard);
	const resetPlayerCrossoutAction: Action = {
		type: 'NAME_CROSSOUT',
		payload: {
			player: 0
		}
	};
	io.emit('action', resetPlayerCrossoutAction);

	const handlePlayerAction = (playerNumber: number) => {
		const action: Action = {
			type: 'NAME_CROSSOUT',
			payload: {
				player: playerNumber
			}
		};
		io.emit('action', action);
	};
</script>

<div class="h-screen w-screen bg-slate-900">
	<form method="POST" class="mx-2 flex flex-col gap-1">
		<div class="flex flex-col">
			<label for="round" class="text-sm text-slate-200">Round</label>
			<input
				id="round"
				name="round"
				type="text"
				value={scoreboard?.round ?? ''}
				class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
			/>
		</div>
		<div class="grid grid-cols-5">
			<div class="col-span-3 flex flex-col">
				<label for="player1Name" class="text-sm text-slate-200">Player 1</label>
				<input
					id="player1Name"
					name="player1Name"
					type="text"
					value={scoreboard?.player1.name ?? ''}
					class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
				/>
			</div>
			<div class="flex flex-col pl-2">
				<label for="player1Score" class="text-sm text-slate-200">Score</label>
				<input
					id="player1Score"
					name="player1Score"
					type="number"
					value={scoreboard?.player1.score ?? ''}
					class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
				/>
			</div>
			<div class="flex flex-col pl-2">
				<p class="text-sm text-slate-200">Action</p>
				<button
					type="button"
					on:click={() => handlePlayerAction(1)}
					class="h-full rounded-md border border-slate-300 bg-slate-700 text-slate-100"
				>
					❌
				</button>
			</div>
		</div>
		<div class="grid grid-cols-5">
			<div class="col-span-3 flex flex-col">
				<label for="player2Name" class="text-sm text-slate-200">Player 2</label>
				<input
					id="player2Name"
					name="player2Name"
					type="text"
					value={scoreboard?.player2.name ?? ''}
					class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
				/>
			</div>
			<div class="flex flex-col pl-2">
				<label for="player2Score" class="text-sm text-slate-200">Score</label>
				<input
					id="player2Score"
					name="player2Score"
					type="number"
					value={scoreboard?.player2.score ?? ''}
					class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
				/>
			</div>
			<div class="flex flex-col pl-2">
				<p class="text-sm text-slate-200">Action</p>
				<button
					type="button"
					on:click={() => handlePlayerAction(2)}
					class="h-full rounded-md border border-slate-300 bg-slate-700 text-slate-100"
				>
					❌
				</button>
			</div>
		</div>
		<div class="flex flex-col">
			<label for="event" class="text-sm text-slate-200">Event</label>
			<input
				id="event"
				name="event"
				type="text"
				value={scoreboard?.event ?? ''}
				class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
			/>
		</div>
		<div class="flex flex-col">
			<label for="game" class="text-sm text-slate-200">Game</label>
			<select
				id="game"
				name="game"
				class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
				bind:value={scoreboard.game}
			>
				{#each Object.values(GAMES) as game}
					<option value={game}>{game}</option>
				{/each}
			</select>
		</div>

		<div class="flex flex-col">
			<label for="overlayStyle" class="text-sm text-slate-200">Overlay Style</label>
			<select
				id="overlayStyle"
				name="overlayStyle"
				class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
				bind:value={scoreboard.overlayStyle}
			>
				{#each Object.values(OVERLAY_STYLES) as overlayStyle}
					<option value={overlayStyle}>{overlayStyle}</option>
				{/each}
			</select>
		</div>

		{#if scoreboard.overlayStyle == OVERLAY_STYLES.CREWS}
			<CrewBattleDashboard {scoreboard} />
		{/if}

		<button
			class="mt-4 w-fit self-center rounded-md border border-slate-300 bg-slate-700 p-2 text-slate-100"
			type="submit"
		>
			Update
		</button>
	</form>
</div>
