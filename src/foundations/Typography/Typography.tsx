import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './Typography.module.scss';

const allowedElements = ['h1', 'h5', 'p', 'span', 'a', 'div'] as const;
const varients = [
	'h1',
	'h5',
	'body-1',
	'body-1-heavy',
	'body-2',
	'body-Monst_16-500',
	'body-Monst_14-400',
	'body-Monst_14-500',
	'body-Monst_13-400',
	'body-Monst_12-600',
	'body-NTR_16-400',
	'body-Inter_14-400',
	'body-Inter_16-400',
	'body-Monst_10-600'
] as const;

type El = (typeof allowedElements)[number];
export type TypographyVarient = (typeof varients)[number];

export interface TypographyProps {
	children?: string | ReactNode;

	className?: string;

	/** Html Element to use eg: h1, h2, p etc */
	el?: El;

	/** Text Style types  */
	type?: TypographyVarient;
	onClick?: MouseEventHandler<HTMLElement>;
	innerHtml?: string;

	fontStyle?: React.CSSProperties['fontStyle'];

	lineHeight?: string;
	colorStyle?: string;

	/** Responsive alignment names left, right, center, mobile-center, desktop-right etc */
	textAlign?: string;

	opacity?: number;

	/** Number of max lines to render after which ... will be shown */
	maxLines?: number;

	textDecoration?: React.CSSProperties['textDecoration'];

	minLines?: number;

	href?: string;
}

const Typography = ({
	el,
	textAlign,
	type,
	innerHtml,
	href,
	lineHeight,
	textDecoration,
	maxLines,
	colorStyle,
	fontStyle,
	onClick,
	children,
	className,
	opacity
}: TypographyProps) => {
	let Tag: any = allowedElements.includes(el!) ? el : 'p';
	let alignments = textAlign
		? textAlign
				.split(' ')
				.map(item => styles[`align-${item}`])
				.join(' ')
		: '';

	return (
		<Tag
			dangerouslySetInnerHTML={innerHtml ? { __html: innerHtml } : undefined}
			className={`${styles['typography']} ${styles[`type--${type}`]} ${innerHtml && styles['rich-text']}  ${styles[`cs--${colorStyle}`]} ${alignments} ${className}`}
			style={{
				cursor: onClick || href ? 'pointer' : undefined,
				fontStyle,
				color: colorStyle,
				lineClamp: maxLines,
				WebkitLineClamp: maxLines,
				textDecoration: textDecoration,
				textOverflow: 'ellipsis',
				lineHeight: lineHeight,
				opacity: opacity
			}}
			href={href}
			onClick={onClick}>
			{innerHtml ? undefined : children}
		</Tag>
	);
};

export default Typography;
