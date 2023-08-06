import React, { useCallback, useEffect, useState } from 'react';
import InputField from '../../../../../../components/InputField/InputField';
import Flexbox from '../../../../../../foundations/Flexbox/Flexbox';
import LocationIcon from '../../../../../../assets/homepage/location-icon-pink.svg';
import Typography from '../../../../../../foundations/Typography/Typography';
import styles from './BrandDetails.module.scss';
import Label from '../../../../../../components/Label/Label';

export interface IBrandDetails {
	id: string;
	brandName: string;
	entityType: string;
	ein: Date;
	einIssuingCountry: string;
	vertical: number;
	stockSymbol: number;
	stockExchange: number;
}

interface IBrandDetailsProps {
	isEditable: boolean;
}

const BrandDetails = React.memo((props: IBrandDetailsProps) => {
	const [enteredBrandName, setEnteredBrandName] = useState<number>(5672359102386);
	const [enteredEntityType, setEnteredEntityType] = useState<string>('Phone.com MVP premium');
	const [enteredEIN, setEnteredEIN] = useState<Date>(new Date('2023/02/28'));
	const [enteredEINIssuingCountry, setEnteredEINIssuingCountry] = useState<string>('American Express (4152)');
	const [enteredVertical, setEnteredVertical] = useState<number>(98621620);
	const [enteredStockSymbol, setEnteredStockSymbol] = useState<number>(98621620);
	const [enteredStockExchange, setEnteredStockExchange] = useState<number>(567235910286);

	const onSubmitHandler = useCallback((save: boolean) => {
		//call the api here to save form
		console.log('saving the form', save);
	}, []);

	useEffect(() => {
		if (props.isEditable === false) onSubmitHandler(props.isEditable);
	}, [onSubmitHandler, props.isEditable]);

	return (
		<Flexbox direction="column" gap={20}>
			<Flexbox gap={10}>
				<img src={LocationIcon} alt="location icon" />
				<Typography type="h5">Brand Details</Typography>
			</Flexbox>
			<form className={styles['brand-details-form']}>
				<Wrapper>
					<Label label="Brand Name" />
					<InputField type="number" value={enteredBrandName} setEnteredValue={setEnteredBrandName} disabled={!props.isEditable} />
				</Wrapper>
				<Wrapper>
					<Label label="Entity Type" />
					<InputField type="text" placeholder="" value={enteredEntityType} setEnteredValue={setEnteredEntityType} disabled={!props.isEditable} />
				</Wrapper>
				<Wrapper>
					<Label label="EIN" />
					<InputField type="date" placeholder="" value={new Date(enteredEIN)} setEnteredValue={setEnteredEIN} disabled={!props.isEditable} />
				</Wrapper>
				<Wrapper>
					<Label label="EIN Issuing Country" />
					<InputField type="text" placeholder="" value={enteredEINIssuingCountry} setEnteredValue={setEnteredEINIssuingCountry} disabled={!props.isEditable} />
				</Wrapper>
				<Wrapper>
					<Label label="Vertical" />
					<InputField type="number" placeholder="" value={enteredVertical} setEnteredValue={setEnteredVertical} disabled={!props.isEditable} />
				</Wrapper>
				<Wrapper>
					<Label label="Stock Symbol" />
					<InputField type="number" placeholder="" value={enteredStockSymbol} setEnteredValue={setEnteredStockSymbol} disabled={!props.isEditable} />
				</Wrapper>
				<Wrapper>
					<Label label="Stock Exchange" />
					<InputField type="number" placeholder="" value={enteredStockExchange} setEnteredValue={setEnteredStockExchange} disabled={!props.isEditable} />
				</Wrapper>
			</form>
		</Flexbox>
	);
});

export const Wrapper = React.memo((props: any) => {
	return (
		<Flexbox gap={4} direction="column">
			{props.children}
		</Flexbox>
	);
});

export default BrandDetails;
