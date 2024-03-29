import type { Scoreboard } from './types/scoreboard';
import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { OVERLAY_STYLES } from './types/overlayStyle';
import { GAMES } from './types/game';

const fileName = process.env.VITEST_POOL_ID ? 'data.test.json' : 'data.json';
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
			game: jsonData?.game ?? GAMES.DEFAULT,
			player1: {
				name: jsonData?.player1?.name ?? '',
				score: jsonData?.player1?.score ?? 0
			},
			player2: {
				name: jsonData?.player2?.name ?? '',
				score: jsonData?.player2?.score ?? 0
			},
			round: jsonData?.round ?? '',
			overlayStyle: jsonData?.overlayStyle ?? OVERLAY_STYLES.DEFAULT,
			customData: jsonData?.customData
		};
		return scoreboard;
	} catch (error) {
		// Handle errors, e.g., file not found
		console.error(JSON.stringify(error));
		console.error('Could not read from file in the following location: ' + storagePath);
		const blankScoreboard: Scoreboard = {
			round: '',
			player1: {
				name: '',
				score: 0
			},
			player2: {
				name: '',
				score: 0
			},
			event: '',
			game: GAMES.DEFAULT,
			overlayStyle: OVERLAY_STYLES.DEFAULT,
			customData: undefined
		};
		return blankScoreboard;
	}
};
