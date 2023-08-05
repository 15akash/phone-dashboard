import Flexbox from '../../foundations/Flexbox/Flexbox';
import Typography from '../../foundations/Typography/Typography';
import { MdEdit } from 'react-icons/md';
import styles from './DetailsHeader.module.scss';

interface IDetailsHeaderProps {
	heading: string;
}

const DetailsHeader = (props: IDetailsHeaderProps) => {
	return (
		<Flexbox justifyContent="space-between" alignItems="center" className={styles['details-con']}>
			<Typography type="body-Monst_16-500">{props.heading}</Typography>
			<MdEdit />
		</Flexbox>
	);
};

export default DetailsHeader;
