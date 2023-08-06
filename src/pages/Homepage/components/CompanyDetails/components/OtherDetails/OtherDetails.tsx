import React from 'react';
import LocationIcon from '../../../../../../assets/homepage/location-icon-green.svg';
import Flexbox from '../../../../../../foundations/Flexbox/Flexbox';
import Typography from '../../../../../../foundations/Typography/Typography';

export interface IOtherDetails {
	id: string;
	website: string;
	referenceID: number;
	mobilePhone: number;
	otpConfirmation: number;
}

const OtherDetails = React.memo(() => {
	return (
		<Flexbox direction="column" gap={20}>
			<Flexbox alignItems="center" gap={10}>
				<img src={LocationIcon} alt="location icon" />
				<Typography type="h5">Other Details</Typography>
			</Flexbox>
		</Flexbox>
	);
});

export default OtherDetails;
