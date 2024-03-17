export const GAMES = {
	DEFAULT: 'Default',
	UNI: 'UnderNight',
	TEKKEN: 'Tekken'
} as const;

export type Game = (typeof GAMES)[keyof typeof GAMES];
