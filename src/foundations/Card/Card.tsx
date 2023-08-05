import React, { ReactNode } from 'react';
import styles from './Card.module.scss';

interface ICardProps {
	children: ReactNode;
}

const Card = (props: ICardProps) => {
	return (
		<div className={styles.box}>
			<div className={styles.rectangle}>{props.children}</div>
		</div>
	);
};

export default Card;
