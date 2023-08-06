import React from 'react';
import styles from './Homepage.module.scss';
import Flexbox from '../../foundations/Flexbox/Flexbox';
import Typography from '../../foundations/Typography/Typography';
import TabsColumn from './components/TabsColumn/TabsColumn';
import CompanyDetails from './components/CompanyDetails/CompanyDetails';

const Homepage = React.memo(() => {
	return (
		<Flexbox className={styles['homepage']} direction="column" gap={30}>
			<Flexbox>
				<Typography type="body-1" colorStyle="#8C98A0">
					{'My Brands <<'}
				</Typography>
				<Typography colorStyle="#2a9bb7" type="body-1">
					&nbsp;Details of Brand
				</Typography>
			</Flexbox>
			<TabsColumn />
			<CompanyDetails />
		</Flexbox>
	);
});

export default Homepage;
