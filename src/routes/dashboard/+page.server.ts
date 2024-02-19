import { getScoreboard, updateScoreboard } from '$lib/scoreboardActions';
import type { Scoreboard } from '$lib/types/scoreboard';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		// TODO update the form
		const formData = await request.formData();
		const event = formData.get('event')?.toString() ?? '';
		const game = formData.get('game')?.toString() ?? '';
		const player1Name = formData.get('player1Name')?.toString() ?? '';
		const player1Score = parseInt(formData.get('player1Score')?.toString() ?? '0');
		const player2Name = formData.get('player2Name')?.toString() ?? '';
		const player2Score = parseInt(formData.get('player2Score')?.toString() ?? '0');
		const round = formData.get('round')?.toString() ?? '';

		const newScoreboard: Scoreboard = {
			event,
			game,
			player1: {
				name: player1Name,
				score: player1Score
			},
			player2: {
				name: player2Name,
				score: player2Score
			},
			round
		};

		await updateScoreboard(newScoreboard);
	}
} satisfies Actions;

export const load = (async () => {
	const scoreboard = await getScoreboard();
	return { scoreboard };
}) satisfies PageServerLoad;
