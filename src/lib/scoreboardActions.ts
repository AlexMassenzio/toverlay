import type { Scoreboard } from './types/scoreboard';
import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const fileName = process.env.VITEST_POOL_ID ? 'testData.json' : 'data.json';
export const storagePath = path.resolve(process.cwd(), fileName);

export const updateScoreboard = async (newScoreboard: Scoreboard) => {
	await fs.writeFile(storagePath, JSON.stringify(newScoreboard, null, 2), 'utf-8');
	const scoreboard = await getScoreboard();
	return scoreboard;
};

export const getScoreboard = async () => {
	if (!existsSync(storagePath)) {
		await fs.writeFile(storagePath, JSON.stringify({}, null, 2), { flag: 'wx' });
	}

	try {
		const fileData = await fs.readFile(storagePath, 'utf-8');
		const jsonData = JSON.parse(fileData);
		const scoreboard: Scoreboard = {
			event: jsonData?.event ?? '',
			game: jsonData?.game ?? '',
			player1: jsonData?.player1 ?? '',
			player2: jsonData?.player2 ?? '',
			round: jsonData?.round ?? ''
		};
		return scoreboard;
	} catch (error) {
		// Handle errors, e.g., file not found
		console.error(JSON.stringify(error));
		console.error('Could not read from file in the following location: ' + storagePath);
		return {
			round: '',
			player1: '',
			player2: '',
			event: '',
			game: ''
		};
	}
};
