import React, { useMemo, useState } from 'react';
import styles from './CompanyDetails.module.scss';
import Flexbox from '../../../../foundations/Flexbox/Flexbox';
import DetailsHeader from '../../../../components/DetailsHeader/DetailsHeader';
import BlueLocationIcon from '../../../../assets/homepage/location-icon-blue.svg';
import GreenLocationIcon from '../../../../assets/homepage/location-icon-green.svg';
import BrandDetails, { IBrandDetails } from './components/BrandDetails/BrandDetails';
import OtherDetails, { IOtherDetails } from './components/OtherDetails/OtherDetails';
import PersonalDetails, { IPeronalDetails } from './components/PersonalDetails/PersonalDetails';

interface IDetailsList {
	id: string;
	listTitle: 'Brand' | 'Personal' | 'Other';
	formData: IBrandDetails | IPeronalDetails | IOtherDetails;
	icon: string;
}

const CompanyDetails = React.memo(() => {
	// const detailsList: IDetailsList[] = useMemo(() => [{ listTitle: 'Brand Details' }], []);
	const [saveCompanyDetails, setSaveCompanyDetails] = useState(false);
	const [saveContactDetails, setSaveContactDetails] = useState(false);
	const [saveRegisteredCampaigns, setSaveRegisteredCampaigns] = useState(false);

	return (
		<Flexbox gap={20} direction="column" className={styles['company-card-con']}>
			<div className={styles['company-details-con']}>
				<DetailsHeader heading="Company Details" value={saveCompanyDetails} saveValue={setSaveCompanyDetails} />
				<div className={styles['details-columns']}>
					<BrandDetails isEditable={saveCompanyDetails} />
					<PersonalDetails />
					<OtherDetails />
				</div>
			</div>
			<div>
				<DetailsHeader heading="Contact Details" value={saveContactDetails} saveValue={setSaveContactDetails} />
				<div className={styles['details-columns']}></div>
			</div>
			<div>
				<DetailsHeader heading="Registered Campaigns" value={saveRegisteredCampaigns} saveValue={setSaveRegisteredCampaigns} />
				<div className={styles['details-columns']}></div>
			</div>
		</Flexbox>
	);
});

export default CompanyDetails;
