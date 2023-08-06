import Flexbox from '../../foundations/Flexbox/Flexbox';
import Typography from '../../foundations/Typography/Typography';
import { MdEdit, MdSave } from 'react-icons/md';
import styles from './DetailsHeader.module.scss';

interface IDetailsHeaderProps {
	heading: string;
	value: boolean;
	saveValue: (item: boolean) => void;
}

const DetailsHeader = (props: IDetailsHeaderProps) => {
	return (
		<Flexbox justifyContent="space-between" alignItems="center" className={styles['details-con']}>
			<Typography type="body-Monst_16-500">{props.heading}</Typography>
			{!props.value ? <MdEdit cursor="pointer" onClick={() => props.saveValue(true)} /> : <MdSave cursor="pointer" onClick={() => props.saveValue(false)} />}
		</Flexbox>
	);
};

export default DetailsHeader;
