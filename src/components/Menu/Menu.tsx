import styles from './Menu.module.scss';
import Flexbox from '../../foundations/Flexbox/Flexbox';

import Typography from '../../foundations/Typography/Typography';
import {
	logo,
	logoName,
	AvatarIcon,
	DownArrow,
	CallsIcon,
	MeetingsIcon,
	MessagesIcon,
	VoicemailIcon,
	FaxIcon,
	PeopleIcon,
	SettingsIcon,
	SMSEnrollmentIcon,
	ConfigureIcon,
	MoreServicesIcon,
	HelpIcon
} from './MenuIconFile';

interface MenuItem {
	id: string;
	displayName: string;
	icon: string;
}

const Menu = () => {
	const menuItems: MenuItem[] = [
		{ id: 'calls', displayName: 'Calls', icon: CallsIcon },
		{ id: 'messages', displayName: 'Messages', icon: MessagesIcon },
		{ id: 'voicemail', displayName: 'Voicemail', icon: VoicemailIcon },
		{ id: 'fax', displayName: 'Fax', icon: FaxIcon },
		{ id: 'people', displayName: 'People', icon: PeopleIcon },
		{ id: 'meetings', displayName: 'Meetings', icon: MeetingsIcon },
		{ id: 'settings', displayName: 'Settings', icon: SettingsIcon },
		{ id: 'sms', displayName: 'SMS Enrollment', icon: SMSEnrollmentIcon },
		{ id: 'configure', displayName: 'Configure', icon: ConfigureIcon },
		{ id: 'more_services', displayName: 'More Services', icon: MoreServicesIcon },
		{ id: 'help', displayName: 'Help', icon: HelpIcon }
	];
	return (
		<Flexbox direction="column" className={styles['menu-section']}>
			<Flexbox alignItems="center" className={styles['logo-con']} gap={7}>
				<img src={logo} alt="logo" />
				<img src={logoName} alt="phone.com" />
			</Flexbox>
			<Flexbox className={styles['name-con']} gap={12} alignItems="center">
				<img src={AvatarIcon} alt="avatar" />
				<Flexbox direction="column">
					<Typography type="body-Monst_14-500">Dheeraj Katarya</Typography>
					<Typography type="body-Monst_13-400">Phone.com</Typography>
				</Flexbox>
			</Flexbox>
			<Flexbox width="100%">
				<Flexbox justifyContent="space-between" alignItems="center" className={styles['my-inbox']}>
					<Typography type="body-NTR_16-400">MY INBOX</Typography>
					<img src={DownArrow} alt="down arrow" />
				</Flexbox>
			</Flexbox>
			<Flexbox direction="column" width="100%">
				{menuItems.map((item: MenuItem) => (
					<Flexbox alignItems="center" key={item.id} className={styles['single-menu-item']} gap={22}>
						<img src={item.icon} alt={item.id} />
						<Typography type="body-Monst_14-400">{item.displayName}</Typography>
					</Flexbox>
				))}
			</Flexbox>
		</Flexbox>
	);
};

export default Menu;
