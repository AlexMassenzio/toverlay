import type { RequestHandler } from './$types';
import fs from 'fs/promises';
import { existsSync } from 'fs';
import { json } from '@sveltejs/kit';
import type { Scoreboard } from '$lib/types/scoreboard';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const storagePath: string = body.storagePath ?? '';
	const scoreboard: Scoreboard = body.scoreboard;

	if (existsSync(storagePath)) {
		const filePaths = storagePath.split('/');
		const fileExtension: string = '.' + filePaths[filePaths.length - 1].split('.').at(-1);

		if (fileExtension == '') {
			console.error('Could not parse the file extension.');
			return new Response();
		}
		let newStoragePath = '';
		for (let index = 0; index < filePaths.length - 1; index++) {
			newStoragePath += filePaths[index] + '/';
		}
		newStoragePath +=
			scoreboard.event +
			' ' +
			scoreboard.round +
			' ' +
			scoreboard.player1.name +
			' vs ' +
			scoreboard.player2.name +
			fileExtension;

		// TODO: This is very hacky, properly wait for file to not be busy in the future.
		await new Promise((resolve) => setTimeout(resolve, 2000));

		try {
			await fs.rename(storagePath, newStoragePath);
			console.log('renamed file to ' + newStoragePath);
			return json(newStoragePath);
		} catch (error: unknown) {
			console.error(error);
		}
	} else {
		console.error('Could not find file path: ' + storagePath);
	}
	return new Response();
};
