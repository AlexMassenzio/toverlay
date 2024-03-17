import { describe, expect, it } from 'vitest';
import { convertToOverlayStyle } from './overlayStyleUtil';
import { OVERLAY_STYLES } from './types/overlayStyle';
import type { OverlayStyle } from './types/overlayStyle';

describe('convertToOverlayStyle', () => {
	it('should return an overlay style from a valid string', async () => {
		const validOverlayStyle = OVERLAY_STYLES.CREWS;
		const expected: OverlayStyle = OVERLAY_STYLES.CREWS;

		const result = convertToOverlayStyle(validOverlayStyle);
		expect(result).toEqual(expected);
		expect(result).toBeTypeOf(typeof expected);
	});

	it('should return the defualt overlay style from a invalid string', async () => {
		const inValidOverlayStyle = 'asdf';
		const expected: OverlayStyle = OVERLAY_STYLES.DEFAULT;

		const result = convertToOverlayStyle(inValidOverlayStyle);
		expect(result).toEqual(expected);
		expect(result).toBeTypeOf(typeof expected);
	});
});
