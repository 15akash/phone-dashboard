import React from 'react';
import Flexbox from '../../foundations/Flexbox/Flexbox';
import Typography from '../../foundations/Typography/Typography';

interface IAllOtherPageProps {
	pageName: string;
}

const AllOtherPage = React.memo((props: IAllOtherPageProps) => {
	return (
		<Flexbox width="100%" height="100%" justifyContent="center" alignItems="center">
			<Typography type="h5">{`${props.pageName} Page`}</Typography>
		</Flexbox>
	);
});

export default AllOtherPage;
