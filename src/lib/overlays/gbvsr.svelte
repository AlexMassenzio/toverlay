<script lang="ts">
	import { defualtTransitionConfig, playerCrossoutAnimation } from '$lib/transitionConfigs';
	import type { Action } from '$lib/types/action';
	import { OVERLAY_STYLES } from '$lib/types/overlayStyle';
	import type { Scoreboard } from '$lib/types/scoreboard';
	import { io } from '$lib/webSocketConnection';
	import { fade } from 'svelte/transition';

	export let scoreboard: Scoreboard;
	let killedPlayer = 0;

	io.on('action', (action: Action) => {
		if (action.type == 'NAME_CROSSOUT') {
			killedPlayer = action.payload.player;
		}
	});
</script>

{#if killedPlayer != 1}
	<h1 class="p1 player-text" in:fade={defualtTransitionConfig} out:playerCrossoutAnimation>
		{scoreboard.player1.name.toUpperCase()}
	</h1>
	<h1 class="score1 player-text" in:fade={defualtTransitionConfig} out:playerCrossoutAnimation>
		{scoreboard.player1.score}
	</h1>
{/if}

{#if killedPlayer != 2}
	<h1 class="p2 player-text" in:fade={defualtTransitionConfig} out:playerCrossoutAnimation>
		{scoreboard.player2.name.toUpperCase()}
	</h1>
	<h1 class="score2 player-text" in:fade={defualtTransitionConfig} out:playerCrossoutAnimation>
		{scoreboard.player2.score}
	</h1>
{/if}

{#if scoreboard.overlayStyle == OVERLAY_STYLES.CREWS}
	<section transition:fade={defualtTransitionConfig}>
		<div class="team-1-box" />
		<div class="team-2-box" />
		<h3 class="team-1-name team-text">{scoreboard.customData?.team1.name ?? 'team1'}</h3>
		<h3 class="team-2-name team-text">{scoreboard.customData?.team2.name ?? 'team2'}</h3>
		<h3 class="team-1-score team-score-text">{scoreboard.customData?.team1.score ?? '-1'}</h3>
		<h3 class="team-2-score team-score-text">{scoreboard.customData?.team2.score ?? '-1'}</h3>
	</section>
{/if}

<style>
	.team-1-score {
		position: fixed;
		left: 14px;
		top: 140px;
	}
	.team-2-score {
		position: fixed;
		left: 1860px;
		top: 140px;
	}
	.team-score-text {
		color: rgba(245, 245, 245, 1);
		font-family: 'Archivo Black';
		font-style: normal;
		font-size: 64px;
		line-height: 1.2;
		letter-spacing: 0px;
		text-decoration: none;
		text-transform: none;
	}
	.score1 {
		position: fixed;
		right: 1202px;
		top: 26px;
	}
	.score2 {
		position: fixed;
		left: 1202px;
		top: 26px;
	}
	.p1 {
		position: fixed;
		right: 1250px;
		top: 26px;
	}
	.p2 {
		position: fixed;
		left: 1250px;
		top: 26px;
	}
	.player-text {
		text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
		color: rgba(245, 245, 245, 1);
		font-family: 'Archivo Black';
		font-style: normal;
		font-size: 36px;
		font-weight: 400;
		line-height: 1.2;
		letter-spacing: 0px;
		text-decoration: none;
		text-transform: none;
	}
	.team-1-box {
		position: fixed;
		width: 375px;
		height: 31px;
		left: 184px;
		top: 170px;
		transform: skew(-45deg);
		background-color: rgba(0, 0, 0, 0.38125);
		border: 2px solid rgba(179, 179, 179, 1);
	}
	.team-1-name {
		position: fixed;
		width: 400px;
		height: 23px;
		left: 290px;
		top: 175px;
		color: rgba(245, 245, 245, 1);
	}
	.team-2-name {
		position: fixed;
		width: 400px;
		height: 23px;
		left: 1464px;
		top: 175px;
		color: rgba(245, 245, 245, 1);
	}
	.team-text {
		text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
		font-family: 'Archivo Black';
		font-style: normal;
		font-size: 18px;
		font-weight: 400;
		line-height: 1.2;
		letter-spacing: 0px;
		text-decoration: none;
		text-transform: none;
	}
	.team-2-box {
		position: fixed;
		width: 375px;
		height: 30px;
		left: 1360px;
		top: 170px;
		transform: skew(45deg);
		background-color: rgba(0, 0, 0, 0.38125);
		border: 2px solid rgba(179, 179, 179, 1);
	}
</style>
