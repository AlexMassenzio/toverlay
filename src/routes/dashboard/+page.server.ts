import { convertToOverlayStyle } from '$lib/overlayStylesUtil';
import { getScoreboard, updateScoreboard } from '$lib/scoreboardActions';
import { OVERLAY_STYLES, type OverlayStyles } from '$lib/types/overlayStles';
import type { CustomData, Scoreboard } from '$lib/types/scoreboard';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const event = formData.get('event')?.toString() ?? '';
		const game = formData.get('game')?.toString() ?? '';
		const player1Name = formData.get('player1Name')?.toString() ?? '';
		const player1Score = parseInt(formData.get('player1Score')?.toString() ?? '0');
		const player2Name = formData.get('player2Name')?.toString() ?? '';
		const player2Score = parseInt(formData.get('player2Score')?.toString() ?? '0');
		const round = formData.get('round')?.toString() ?? '';
		let overlayStyleFormData = formData.get('overlayStyle')?.toString() ?? '';
		const overlayStyle = convertToOverlayStyle(overlayStyleFormData);

		let customData: CustomData;

		if (overlayStyle == OVERLAY_STYLES.UNICREWS) {
			customData = {
				team1: {
					name: formData.get('team1Name')?.toString() ?? '',
					score: parseInt(formData.get('team1Score')?.toString() ?? '0'),
					color: ''
				},
				team2: {
					name: formData.get('team2Name')?.toString() ?? '',
					score: parseInt(formData.get('team2Score')?.toString() ?? '0'),
					color: ''
				}
			};
		}

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
			round,
			overlayStyle,
			customData
		};

		await updateScoreboard(newScoreboard);
	}
} satisfies Actions;

export const load = (async () => {
	const scoreboard = await getScoreboard();
	return { scoreboard };
}) satisfies PageServerLoad;
