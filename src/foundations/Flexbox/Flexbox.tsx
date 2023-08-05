import { ReactNode } from 'react';

interface FlexboxProps {
	direction?: 'row' | 'column';
	justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
	children?: ReactNode;
	gap?: number;
	width?: string | undefined;
	height?: string | undefined;
	className?: string;
	margin?: string;
	onClick?: () => void;
}

const Flexbox = ({
	direction = 'row',
	gap = 0,
	width = undefined,
	margin,
	height = undefined,
	justifyContent,
	alignItems,
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
				width,
				height,
				margin
			}}
			onClick={onClick}
			{...props}>
			{children}
		</div>
	);
};

export default Flexbox;
