import { OVERLAY_STYLES, type OverlayStyle } from './types/overlayStyle';

export const convertToOverlayStyle = (possibleOverlayStyle: string): OverlayStyle => {
	let overlayStyle: OverlayStyle = OVERLAY_STYLES.DEFAULT;
	Object.values(OVERLAY_STYLES).forEach((value) => {
		if (possibleOverlayStyle == value) {
			overlayStyle = value;
		}
	});
	return overlayStyle;
};
