import { GAMES, type Game } from './types/game';

export const convertToGame = (possibleGame: string): Game => {
	let game: Game = GAMES.DEFAULT;
	Object.values(GAMES).forEach((value) => {
		if (possibleGame == value) {
			game = value;
		}
	});
	return game;
};
