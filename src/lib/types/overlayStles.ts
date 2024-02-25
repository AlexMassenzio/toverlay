export const OVERLAY_STYLES = {
	DEFUALT: 'Default',
	UNICREWS: 'UniCrews'
} as const;

export type OverlayStyles = (typeof OVERLAY_STYLES)[keyof typeof OVERLAY_STYLES];
