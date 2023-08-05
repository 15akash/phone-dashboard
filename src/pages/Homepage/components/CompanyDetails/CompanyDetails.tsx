import React, { useMemo } from 'react';
import styles from './CompanyDetails.module.scss';
import Flexbox from '../../../../foundations/Flexbox/Flexbox';
import DetailsHeader from '../../../../components/DetailsHeader/DetailsHeader';
import LocationIcon from '../../../../assets/homepage/location-icon-pink.svg';
import BlueLocationIcon from '../../../../assets/homepage/location-icon-blue.svg';
import GreenLocationIcon from '../../../../assets/homepage/location-icon-green.svg';

interface IDetailsList {
	listTitle: string;
	detailType: string;
	detailStatus: string;
	icon: string;
}

const CompanyDetails = () => {
	const detailsList = useMemo(() => [], []);
	return (
		<Flexbox gap={20} direction="column" className={styles['company-card-con']}>
			<div className={styles['company-details-con']}>
				<DetailsHeader heading="Company Details" />
				<div className={styles['details-columns']}></div>
			</div>
			<div>
				<DetailsHeader heading="Contact Details" />
				<div className={styles['details-columns']}></div>
			</div>
			<div>
				<DetailsHeader heading="Registered Campaigns" />
				<div className={styles['details-columns']}></div>
			</div>
		</Flexbox>
	);
};

export default CompanyDetails;
