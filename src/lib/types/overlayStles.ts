export const OVERLAY_STYLES = {
	DEFUALT: 'Default',
	UNI_CREWS: 'UniCrews',
	FIGHT_CARD: 'FightCard'
} as const;

export type OverlayStyles = (typeof OVERLAY_STYLES)[keyof typeof OVERLAY_STYLES];
