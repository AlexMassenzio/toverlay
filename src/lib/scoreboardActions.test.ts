import { describe, expect, it } from 'vitest';
import type { Scoreboard } from './types/scoreboard';
import { getScoreboard, storagePath, updateScoreboard } from './scoreboardActions';
import fs from 'fs/promises';

describe('updateScoreboard', () => {
	it('should update and return all values', async () => {
		const expected: Scoreboard = {
			round: crypto.randomUUID(),
			player1: crypto.randomUUID(),
			player2: crypto.randomUUID(),
			event: crypto.randomUUID(),
			game: crypto.randomUUID()
		};

		const result = await updateScoreboard(expected);
		expect(result).toEqual(expected);
	});
});

describe('getScoreboard', () => {
	it('should return a scoreboard', async () => {
		const expected: Scoreboard = {
			round: crypto.randomUUID(),
			player1: crypto.randomUUID(),
			player2: crypto.randomUUID(),
			event: crypto.randomUUID(),
			game: crypto.randomUUID()
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
			player1: crypto.randomUUID(),
			player2: crypto.randomUUID(),
			event: crypto.randomUUID(),
			game: crypto.randomUUID()
		};

		await updateScoreboard(expected);
		const result = await getScoreboard();

		expect(result).toEqual(expected);
		expect(result).not.toEqual(oldScoreboard);
	});
});
