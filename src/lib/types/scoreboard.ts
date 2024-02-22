import type { UniCrewsData } from './uniCrews';

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
	overlayStyle: string;
	customData: CustomData;
};

export type CustomData = undefined | UniCrewsData;
