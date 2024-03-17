import type { CrewBattle } from './crewBattle';
import type { Game } from './game';
import type { OverlayStyle } from './overlayStyle';

export type Scoreboard = {
	round: string;
	player1: {
		name: string;
		score: number;
	};
	player2: {
		name: string;
		score: number;
	};
	event: string;
	game: Game;
	overlayStyle: OverlayStyle;
	customData: CustomData;
};

export type CustomData = undefined | CrewBattle;
