import React from 'react';
import Typography from '../../foundations/Typography/Typography';

interface ILabelProps {
	label: string;
}

const Label = (props: ILabelProps) => {
	return (
		<label>
			<Typography colorStyle="#6E7A82" type="body-2">
				{props.label}
			</Typography>
		</label>
	);
};

export default Label;
