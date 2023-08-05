import { ReactNode } from 'react';
import styles from './Card.module.scss';
import Flexbox from '../Flexbox/Flexbox';

interface ICardProps {
	children: ReactNode;
}

const Card = (props: ICardProps) => {
	return (
		<Flexbox className={styles.box}>
			<div className={styles.rectangle}>{props.children}</div>
		</Flexbox>
	);
};

export default Card;
