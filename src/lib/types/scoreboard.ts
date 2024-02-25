import type { CrewBattle } from './crewBattle';
import type { OverlayStyles } from './overlayStles';

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
	game: string;
	overlayStyle: OverlayStyles;
	customData: CustomData;
};

export type CustomData = undefined | CrewBattle;
