import React from 'react';
import Flexbox from '../../../../../../foundations/Flexbox/Flexbox';
import Typography from '../../../../../../foundations/Typography/Typography';
import LocationIcon from '../../../../../../assets/homepage/location-icon-blue.svg';

export interface IPeronalDetails {
	id: string;
	firstName: string;
	lastName: string;
	postalCode: string;
	country: string;
	registeredOn: string;
	state: string;
	address: string;
	city: string;
}

const PersonalDetails = React.memo(() => {
	return (
		<Flexbox direction="column" gap={20}>
			<Flexbox gap={10} alignItems="center">
				<img src={LocationIcon} alt="location icon" />
				<Typography type="h5">Personal Details</Typography>
			</Flexbox>
		</Flexbox>
	);
});

export default PersonalDetails;
