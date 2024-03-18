import { backOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export const defualtTransitionConfig: TransitionConfig = { duration: 250 };

/* eslint-disable-next-line @typescript-eslint/no-unused-vars --
 * We don't need the `node` param but it's required for svelte animations.
 **/
export const playerCrossoutAnimation = (node: HTMLElement) => {
	return {
		duration: 1000,
		css: (t: number) => {
			const eased = backOut(t);

			return `
                transform: scale(${eased});
                color: rgba(${t * 200},0,0,1);
				text-decoration: line-through`;
		}
	};
};
