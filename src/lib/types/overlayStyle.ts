export const OVERLAY_STYLES = {
	DEFAULT: 'Default',
	CREWS: 'Crews',
	FIGHT_CARD: 'FightCard'
} as const;

export type OverlayStyle = (typeof OVERLAY_STYLES)[keyof typeof OVERLAY_STYLES];
