import { useState } from 'react';
import styles from './InputField.module.scss';

interface IInputProps {
	type: 'text' | 'number' | 'date';
	placeholder?: string;
	disabled?: boolean;
	value: any;
	setEnteredValue: (value: any) => void;
}

const InputField = (props: IInputProps) => {
	// const [enteredField, setEnteredField] = useState(props.value);
	return (
		<input
			className={props.disabled ? styles['disabled-input'] : styles['input-field-con']}
			type={props.type}
			placeholder={props.placeholder ?? ''}
			disabled={props.disabled ?? false}
			value={props.value}
			onChange={e => {
				// setEnteredField(e.target.value);
				props.setEnteredValue(e.target.value);
			}}
		/>
	);
};

export default InputField;
