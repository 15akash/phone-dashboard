import React from 'react';
import Flexbox from '../../foundations/Flexbox/Flexbox';
import Typography from '../../foundations/Typography/Typography';
import { MdEdit, MdSave } from 'react-icons/md';
import styles from './DetailsHeader.module.scss';

interface IDetailsHeaderProps {
	heading: string;
	value: boolean;
	saveValue: (item: boolean) => void;
}

const DetailsHeader = React.memo((props: IDetailsHeaderProps) => {
	return (
		<Flexbox justifyContent="space-between" alignItems="center" className={styles['details-con']}>
			<Typography type="body-Monst_16-500">{props.heading}</Typography>
			{!props.value ? (
				<Flexbox className={styles['icon-con']} alignItems="center">
					<MdEdit cursor="pointer" onClick={() => props.saveValue(true)} />
				</Flexbox>
			) : (
				<Flexbox className={styles['icon-con']} alignItems="center">
					<MdSave cursor="pointer" onClick={() => props.saveValue(false)} />
				</Flexbox>
			)}
		</Flexbox>
	);
});

export default DetailsHeader;
