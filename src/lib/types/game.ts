export const GAMES = {
	DEFAULT: 'Default',
	UNI: 'UnderNight',
	TEKKEN: 'Tekken',
	GBVSR: 'GranBlue'
} as const;

export type Game = (typeof GAMES)[keyof typeof GAMES];
