import React from 'react';
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
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface MenuItem {
	id: string;
	displayName: string;
	icon: string;
}

interface IMenuProps {
	menuItem: (item: string) => void;
}

const Menu = React.memo((props: IMenuProps) => {
	const [activeMenu, setActiveMenu] = useState<string>('');
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
		<>
			<Link to={'/'} className={styles['logo-con']} onClick={() => props.menuItem('/')}>
				<img src={logo} alt="logo" />
				<img className={styles['mobile-resp']} src={logoName} alt="phone.com" />
			</Link>
			<Flexbox direction="column" className={styles['menu-item-con']}>
				<Flexbox className={styles['name-con']} gap={12} alignItems="center">
					<img src={AvatarIcon} alt="avatar" />
					<Flexbox direction="column" className={styles['mobile-resp']}>
						<Typography type="body-Monst_14-500">Dheeraj Katarya</Typography>
						<Typography type="body-Monst_13-400">Phone.com</Typography>
					</Flexbox>
				</Flexbox>
				<Flexbox width="100%">
					<Flexbox justifyContent="space-between" alignItems="center" className={styles['my-inbox']}>
						<Typography type="body-NTR_16-400">MY INBOX</Typography>
						<img className={styles['mobile-resp']} src={DownArrow} alt="down arrow" />
					</Flexbox>
				</Flexbox>
				{menuItems.map((item: MenuItem) => (
					<Link
						to={`/${item.displayName}`}
						style={activeMenu === item.id ? { background: 'rgba(206, 239, 199, 0.5)' } : {}}
						className={styles['single-menu-item']}
						key={item.id}
						onClick={() => {
							setActiveMenu(item.id);
							props.menuItem(item.displayName);
						}}>
						<img src={item.icon} alt={item.id} />
						<Typography className={styles['mobile-resp']} type="body-Monst_14-400">
							{item.displayName}
						</Typography>
					</Link>
				))}
			</Flexbox>
		</>
	);
});

export default Menu;
