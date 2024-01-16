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
		const player1 = formData.get('player1')?.toString() ?? '';
		const player2 = formData.get('player2')?.toString() ?? '';
		const round = formData.get('round')?.toString() ?? '';

		const newScoreboard: Scoreboard = {
			event,
			game,
			player1,
			player2,
			round
		};

		await updateScoreboard(newScoreboard);
	}
} satisfies Actions;

export const load = (async () => {
	const scoreboard = await getScoreboard();
	return { scoreboard };
}) satisfies PageServerLoad;
