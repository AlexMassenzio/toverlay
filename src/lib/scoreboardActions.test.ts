import { describe, expect, it } from 'vitest';
import type { Scoreboard } from './types/scoreboard';
import { getScoreboard, storagePath, updateScoreboard } from './scoreboardActions';
import fs from 'fs/promises';
import { OVERLAY_STYLES } from './types/overlayStles';

describe('updateScoreboard', () => {
	it('should update and return all values', async () => {
		const expected: Scoreboard = {
			round: crypto.randomUUID(),
			player1: {
				name: crypto.randomUUID(),
				score: Math.floor(Math.random() * 1000000)
			},
			player2: {
				name: crypto.randomUUID(),
				score: Math.floor(Math.random() * 1000000)
			},
			event: crypto.randomUUID(),
			game: crypto.randomUUID(),
			overlayStyle: OVERLAY_STYLES.DEFUALT,
			customData: undefined
		};

		const result = await updateScoreboard(expected);
		expect(result).toEqual(expected);
	});
});

describe('getScoreboard', () => {
	it('should return a scoreboard', async () => {
		const expected: Scoreboard = {
			round: crypto.randomUUID(),
			player1: {
				name: crypto.randomUUID(),
				score: Math.floor(Math.random() * 1000000)
			},
			player2: {
				name: crypto.randomUUID(),
				score: Math.floor(Math.random() * 1000000)
			},
			event: crypto.randomUUID(),
			game: crypto.randomUUID(),
			overlayStyle: OVERLAY_STYLES.DEFUALT,
			customData: undefined
		};

		await fs.writeFile(storagePath, JSON.stringify(expected, null, 2), 'utf-8');
		const result = await getScoreboard();

		expect(result).toEqual(expected);
	});
});

describe('updateScoreboard and getScoreboard in tandem', () => {
	it('getScoreboard should get a new scoreboard after calling updateScoreboard', async () => {
		const oldScoreboard = getScoreboard();
		const expected: Scoreboard = {
			round: crypto.randomUUID(),
			player1: {
				name: crypto.randomUUID(),
				score: Math.floor(Math.random() * 1000000)
			},
			player2: {
				name: crypto.randomUUID(),
				score: Math.floor(Math.random() * 1000000)
			},
			event: crypto.randomUUID(),
			game: crypto.randomUUID(),
			overlayStyle: OVERLAY_STYLES.DEFUALT,
			customData: undefined
		};

		await updateScoreboard(expected);
		const result = await getScoreboard();

		expect(result).toEqual(expected);
		expect(result).not.toEqual(oldScoreboard);
	});
});
