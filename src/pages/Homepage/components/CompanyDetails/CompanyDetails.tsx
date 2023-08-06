import React, { useContext } from 'react';
import styles from './CompanyDetails.module.scss';
import Flexbox from '../../../../foundations/Flexbox/Flexbox';
import DetailsHeader from '../../../../components/DetailsHeader/DetailsHeader';
import BrandDetails from './components/BrandDetails/BrandDetails';
import OtherDetails from './components/OtherDetails/OtherDetails';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import FormsContext from '../../../../store/FormsContext';

const CompanyDetails = React.memo(() => {
	const { state: formCtx, dispatch: dispatchFormAction } = useContext(FormsContext);

	return (
		<Flexbox gap={20} direction="column" className={styles['company-card-con']}>
			<div className={styles['company-details-con']}>
				<DetailsHeader
					heading="Company Details"
					value={formCtx.editCompanyForm}
					saveValue={value => {
						dispatchFormAction({ type: 'EDIT_COMPANY_DETAILS', payload: value });
					}}
				/>
				<div className={styles['details-columns']}>
					<BrandDetails isEditable={formCtx.editCompanyForm} />
					<PersonalDetails />
					<OtherDetails />
				</div>
			</div>
			<div>
				<DetailsHeader
					heading="Contact Details"
					value={formCtx.editContactForm}
					saveValue={value => dispatchFormAction({ type: 'EDIT_CONTACT_DETAILS', payload: value })}
				/>
				<div className={styles['details-columns']}></div>
			</div>
			<div>
				<DetailsHeader
					heading="Registered Campaigns"
					value={formCtx.editRegisteredCampaignsForm}
					saveValue={value => dispatchFormAction({ type: 'EDIT_REGISTERED_CAMPAIGNS', payload: value })}
				/>
				<div className={styles['details-columns']}></div>
			</div>
		</Flexbox>
	);
});

export default CompanyDetails;
