<script lang="ts">
	import { OVERLAY_STYLES } from '$lib/types/overlayStyle';
	import type { Scoreboard } from '$lib/types/scoreboard';

	export let scoreboard: Scoreboard;
</script>

<h1 class="p1 player-text">{scoreboard.player1.name.toUpperCase()}</h1>
<h1 class="p2 player-text">{scoreboard.player2.name.toUpperCase()}</h1>
<h1 class="score1 player-text">{scoreboard.player1.score}</h1>
<h1 class="score2 player-text">{scoreboard.player2.score}</h1>
{#if scoreboard.overlayStyle == OVERLAY_STYLES.CREWS}
	<div class="team-1-box" />
	<div class="team-2-box" />
	<h3 class="team-1-name team-text">{scoreboard.customData?.team1.name ?? 'team1'}</h3>
	<h3 class="team-2-name team-text">{scoreboard.customData?.team2.name ?? 'team2'}</h3>
	<img src="/uni2/team1PointBg.svg" class="team1PointBg" alt={null} />
	<img src="/uni2/team2PointBg.svg" class="team2PointBg" alt={null} />
	<h3 class="team-1-score team-score-text">{scoreboard.customData?.team1.score ?? '-1'}</h3>
	<h3 class="team-2-score team-score-text">{scoreboard.customData?.team2.score ?? '-1'}</h3>
{/if}

<style>
	.team-1-score {
		position: absolute;
		left: 16px;
		top: 116px;
	}
	.team-2-score {
		position: absolute;
		left: 1860px;
		top: 116px;
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
		position: absolute;
		right: 1000px;
		top: 42px;
	}
	.score2 {
		position: absolute;
		left: 1000px;
		top: 42px;
	}
	.team1PointBg {
		position: absolute;
		width: 121px;
		height: 118px;
		left: 0px;
		top: 96px;
	}
	.team2PointBg {
		position: absolute;
		width: 120px;
		height: 118px;
		left: 1800px;
		top: 96px;
	}
	.p1 {
		position: absolute;
		right: 1042px;
		top: 42px;
	}
	.p2 {
		position: absolute;
		left: 1042px;
		top: 42px;
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
		position: absolute;
		width: 555px;
		height: 26px;
		left: 144px;
		top: 130px;
		transform: skew(-61deg);
		background-color: rgba(0, 0, 0, 0.38125);
		border: 2px solid rgba(179, 179, 179, 1);
	}
	.team-1-name {
		position: absolute;
		width: 142px;
		height: 23px;
		left: 307px;
		top: 133px;
		color: rgba(245, 245, 245, 1);
	}
	.team-2-name {
		position: absolute;
		width: 136px;
		height: 23px;
		left: 1464px;
		top: 133px;
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
		position: absolute;
		width: 555px;
		height: 26px;
		left: 1224px;
		top: 130px;
		transform: skew(62deg);
		background-color: rgba(0, 0, 0, 0.38125);
		border: 2px solid rgba(179, 179, 179, 1);
	}
</style>
