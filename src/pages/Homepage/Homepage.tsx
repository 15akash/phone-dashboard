import styles from './Homepage.module.scss';
import Flexbox from '../../foundations/Flexbox/Flexbox';
import Typography from '../../foundations/Typography/Typography';

const Homepage = () => {
	return (
		<Flexbox className={styles['homepage']}>
			<Typography type="body-Inter_16-400">Homepage</Typography>;
		</Flexbox>
	);
};

export default Homepage;
