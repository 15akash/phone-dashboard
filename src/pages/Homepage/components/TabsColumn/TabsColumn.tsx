import React, { useMemo, useState } from 'react';
import styles from './TabsColumn.module.scss';
import Flexbox from '../../../../foundations/Flexbox/Flexbox';
import Typography from '../../../../foundations/Typography/Typography';
import BrandsIcon from '../../../../assets/homepage/income-expenses.svg';
import CampaignIcon from '../../../../assets/homepage/dashboard-group-5441.svg';
import MyDealsIcon from '../../../../assets/homepage/dashboard-icons-my-deals.svg';
import OffersReceivedIcon from '../../../../assets/homepage/dashboard-icons-offer-received.svg';
import TickIcon from '../../../../assets/homepage/tick-icon.svg';

interface IBrandCampaign {
	id: string;
	displayName: string;
	icon: string;
}

interface IStatusInformation {
	id: string;
	statusType: string;
	statusInfo: string;
}

const TabsColumn = React.memo(() => {
	const brandCampaignSelection: IBrandCampaign[] = useMemo(
		() => [
			{ id: 'brands', displayName: 'Brands', icon: BrandsIcon },
			{ id: 'campaigns', displayName: 'Campaigns', icon: CampaignIcon }
		],
		[]
	);

	const statusInformation: IStatusInformation[] = useMemo(
		() => [
			{ id: 'universal', statusType: 'Universal EIN', statusInfo: 'US29173700' },
			{ id: 'brand', statusType: 'Brand Relationship', statusInfo: 'Basic Accounts' },
			{ id: 'tax', statusType: 'Text Exempt Status', statusInfo: 'N/A' },
			{ id: 'government', statusType: 'Government Entity', statusInfo: 'N/A' }
		],
		[]
	);
	const [tabSelection, setTabSelection] = useState('brands');
	const [statusSelection, setStatusSelection] = useState('brand');

	return (
		<Flexbox direction="column" className={styles['brand-campaign-con']}>
			<Flexbox gap={54}>
				{brandCampaignSelection.map(item => (
					<Flexbox gap={10} alignItems="flex-start" onClick={() => setTabSelection(item.id)} key={item.id}>
						<img src={item.icon} alt={item.displayName} />
						<Typography type="body-1-heavy" className={tabSelection === item.id ? styles['active-tab'] : styles[`tab`]}>
							{item.displayName}
						</Typography>
					</Flexbox>
				))}
			</Flexbox>
			<Flexbox className={styles['card-con']} gap={20} direction="column">
				<Flexbox justifyContent="space-between" alignItems="center" className={styles['company-branding']}>
					<Flexbox gap={8}>
						<img src={MyDealsIcon} alt="" />
						<Typography type="h5">Company Name</Typography>
					</Flexbox>
					<Typography type="body-Monst_16-500" colorStyle="#696969">
						Brand ID: BJIKALSN
					</Typography>
				</Flexbox>
				<Flexbox direction="column" gap={9}>
					<Typography type="h1">Phone.com</Typography>
					<Flexbox className={styles['verified-con']} alignItems="center" gap={4}>
						<img src={TickIcon} alt="tick-icon" />
						<Typography type="body-Monst_10-600">VERIFIED</Typography>
					</Flexbox>
				</Flexbox>
				<Flexbox width="95%" className={styles['divider']}></Flexbox>
				<div className={styles['status-info-con']}>
					{statusInformation.map(status => (
						<Flexbox direction="column" cursor="pointer" gap={6} key={status.id} onClick={() => setStatusSelection(status.id)}>
							<Flexbox gap={4}>
								<img src={OffersReceivedIcon} alt={status.id} />
								<Typography type="h5" className={statusSelection === status.id ? styles['active-status'] : ''}>
									{status.statusInfo}
								</Typography>
							</Flexbox>
							<Typography>{status.statusType}</Typography>
						</Flexbox>
					))}
				</div>
			</Flexbox>
		</Flexbox>
	);
});

export default TabsColumn;
