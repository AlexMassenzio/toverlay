import { getScoreboard } from '$lib/scoreboardActions';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const scoreboard = await getScoreboard();
	return { scoreboard };
}) satisfies PageServerLoad;
