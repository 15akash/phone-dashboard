import styles from './Header.module.scss';
import Flexbox from '../../foundations/Flexbox/Flexbox';
import SearchIcon from '../../assets/search-icon.svg';
import DialerIcon from '../../assets/dialer.svg';
import MoonIcon from '../../assets/moon.svg';

const Header = () => {
	return (
		<header>
			<Flexbox className={styles['input-con']}>
				<input type="text" placeholder="Search..." />
				<img src={SearchIcon} alt="search-icon" />
			</Flexbox>
			<Flexbox gap={12} className={styles['icons-con']}>
				<img className={styles['dialer-icon']} src={DialerIcon} alt="dialer-icon" />
				<Flexbox className={styles['divider']}></Flexbox>
				<img src={MoonIcon} className={styles['mode-icon']} alt="mode-icon" />
			</Flexbox>
		</header>
	);
};

export default Header;
