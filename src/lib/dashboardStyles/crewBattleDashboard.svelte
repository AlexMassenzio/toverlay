<script lang="ts">
	import type { Scoreboard } from '$lib/types/scoreboard';

	export let scoreboard: Scoreboard;
</script>

<div class="grid grid-cols-4">
	<div class="col-span-3 flex flex-col">
		<label for="team1Name" class="text-sm text-slate-200">Team 1</label>
		<input
			id="team1Name"
			name="team1Name"
			type="text"
			value={scoreboard.customData?.team1.name ?? ''}
			class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
		/>
	</div>
	<div class="flex flex-col pl-2">
		<label for="team1Score" class="text-sm text-slate-200">Score</label>
		<input
			id="team1Score"
			name="team1Score"
			type="number"
			value={scoreboard.customData?.team1.score ?? ''}
			class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
		/>
	</div>
</div>
<div class="grid grid-cols-4">
	<div class="col-span-3 flex flex-col">
		<label for="team2Name" class="text-sm text-slate-200">Team 2</label>
		<input
			id="team2Name"
			name="team2Name"
			type="text"
			value={scoreboard.customData?.team2.name ?? ''}
			class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
		/>
	</div>
	<div class="flex flex-col pl-2">
		<label for="team2Score" class="text-sm text-slate-200">Score</label>
		<input
			id="team2Score"
			name="team2Score"
			type="number"
			value={scoreboard.customData?.team2.score ?? ''}
			class="rounded-lg border border-slate-300 bg-slate-700 p-2 text-sm text-slate-100"
		/>
	</div>
</div>
