import Flexbox from '../../foundations/Flexbox/Flexbox';
import Typography from '../../foundations/Typography/Typography';
import { MdEdit, MdSave } from 'react-icons/md';
import styles from './DetailsHeader.module.scss';
import { useCallback, useState } from 'react';

interface IDetailsHeaderProps {
	heading: string;
	value: boolean;
	saveValue: (item: boolean) => void;
}

const DetailsHeader = (props: IDetailsHeaderProps) => {
	// const [isEdit, setIsEdit] = useState(props.value);

	// const detailsHeaderHandler = useCallback(
	// 	(value: boolean) => {
	// 		props.saveValue(value);
	// 		setIsEdit(value);
	// 	},
	// 	[props]
	// );

	return (
		<Flexbox justifyContent="space-between" alignItems="center" className={styles['details-con']}>
			<Typography type="body-Monst_16-500">{props.heading}</Typography>
			{!props.value ? <MdEdit onClick={() => props.saveValue(true)} /> : <MdSave onClick={() => props.saveValue(false)} />}
		</Flexbox>
	);
};

export default DetailsHeader;
