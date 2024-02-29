import { describe, expect, it } from 'vitest';
import { convertToOverlayStyle } from './overlayStylesUtil';
import { OVERLAY_STYLES } from './types/overlayStles';
import type { OverlayStyles } from './types/overlayStles';

describe('convertToOverlayStyle', () => {
	it('should return an overlay style from a valid string', async () => {
		const validOverlayStyle = OVERLAY_STYLES.UNI_CREWS;
		const expected: OverlayStyles = OVERLAY_STYLES.UNI_CREWS;

		const result = convertToOverlayStyle(validOverlayStyle);
		expect(result).toEqual(expected);
		expect(result).toBeTypeOf(typeof expected);
	});

	it('should return the defualt overlay style from a invalid string', async () => {
		const inValidOverlayStyle = 'asdf';
		const expected: OverlayStyles = OVERLAY_STYLES.DEFUALT;

		const result = convertToOverlayStyle(inValidOverlayStyle);
		expect(result).toEqual(expected);
		expect(result).toBeTypeOf(typeof expected);
	});
});
