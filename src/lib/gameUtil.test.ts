import { describe, expect, it } from 'vitest';
import { convertToOverlayStyle } from './overlayStyleUtil';
import { GAMES, type Game } from './types/game';
import { convertToGame } from './gameUtil';

describe('convertToGame', () => {
	it('should return a game from a valid string', async () => {
		const validGame = GAMES.UNI;
		const expected: Game = GAMES.UNI;

		const result = convertToGame(validGame);
		expect(result).toEqual(expected);
		expect(result).toBeTypeOf(typeof expected);
	});

	it('should return the defualt game from a invalid string', async () => {
		const invalidGame = 'asdf';
		const expected: Game = GAMES.DEFAULT;

		const result = convertToOverlayStyle(invalidGame);
		expect(result).toEqual(expected);
		expect(result).toBeTypeOf(typeof expected);
	});
});
