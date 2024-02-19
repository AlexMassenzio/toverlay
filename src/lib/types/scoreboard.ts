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
};
