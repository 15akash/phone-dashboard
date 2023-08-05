import React, { ReactNode } from 'react';

interface FlexboxProps {
	direction?: 'row' | 'column';
	justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
	children?: ReactNode;
	gap?: number;
	width?: string | undefined;
	className?: string;
	onClick?: () => void;
}

const Flexbox = ({
	direction = 'row',
	gap = 0,
	width = undefined,
	justifyContent = 'flex-start',
	alignItems = 'flex-start',
	children,
	onClick,
	className,
	...props
}: FlexboxProps) => {
	return (
		<div
			className={className}
			style={{
				display: 'flex',
				flexDirection: direction,
				justifyContent,
				alignItems,
				gap,
				width
			}}
			onClick={onClick}
			{...props}>
			{children}
		</div>
	);
};

export default Flexbox;
