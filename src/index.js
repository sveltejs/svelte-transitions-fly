import { cubicOut } from 'eases-jsnext';

export default function fly(node, {
	delay = 0,
	duration = 400,
	easing = cubicOut,
	fade = true,
	x = 0,
	y = 0
}) {
	const style = getComputedStyle(node);
	const opacity = +style.opacity;
	const transform = style.transform === 'none' ? '' : style.transform;

	return {
		delay,
		fade,
		duration,
		easing,
		css: t => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			${fade && `
				opacity: ${t * opacity}
			`}
		`
	};
}
