import { cubicOut } from 'eases-jsnext';

export default function fade(
	node,
	{ delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0 }
) {
	const o = +getComputedStyle(node).opacity;

	return {
		delay,
		duration,
		easing,
		css: t =>
			`transform: translate(${(1 - t) * x}px, ${(1 - t) * y}px); opacity: ${t * o}`
	};
}
