import styles from './Homepage.module.scss';
import Flexbox from '../../foundations/Flexbox/Flexbox';
import Typography from '../../foundations/Typography/Typography';
import TabsColumn from './components/TabsColumn/TabsColumn';

const Homepage = () => {
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
			<Flexbox className={styles['card-con']}>hello there</Flexbox>
		</Flexbox>
	);
};

export default Homepage;
