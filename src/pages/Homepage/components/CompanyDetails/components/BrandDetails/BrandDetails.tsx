import React, { useCallback, useContext, useEffect, useState } from 'react';
import InputField from '../../../../../../components/InputField/InputField';
import Flexbox from '../../../../../../foundations/Flexbox/Flexbox';
import LocationIcon from '../../../../../../assets/homepage/location-icon-pink.svg';
import Typography from '../../../../../../foundations/Typography/Typography';
import styles from './BrandDetails.module.scss';
import Label from '../../../../../../components/Label/Label';
import FormsContext from '../../../../../../store/FormsContext';

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
	const { state: formCtx, dispatch: dispatchFormAction } = useContext(FormsContext);
	const [enteredBrandName, setEnteredBrandName] = useState<number>(formCtx.brandForm.brandName);
	const [enteredEntityType, setEnteredEntityType] = useState<string>(formCtx.brandForm.entityType);
	const [enteredEIN, setEnteredEIN] = useState<Date>(new Date(formCtx.brandForm.ein));
	const [enteredEINIssuingCountry, setEnteredEINIssuingCountry] = useState<string>(formCtx.brandForm.einIssuingCountry);
	const [enteredVertical, setEnteredVertical] = useState<number>(formCtx.brandForm.vertical);
	const [enteredStockSymbol, setEnteredStockSymbol] = useState<number>(formCtx.brandForm.stockSymbol);
	const [enteredStockExchange, setEnteredStockExchange] = useState<number>(formCtx.brandForm.stockExchange);

	const onSubmitHandler = useCallback(() => {
		dispatchFormAction({
			type: 'SAVE_COMPANY_DETAILS',
			payload: { enteredBrandName, enteredEntityType, enteredEIN, enteredEINIssuingCountry, enteredVertical, enteredStockSymbol, enteredStockExchange }
		});
	}, [dispatchFormAction, enteredBrandName, enteredEIN, enteredEINIssuingCountry, enteredEntityType, enteredStockExchange, enteredStockSymbol, enteredVertical]);

	useEffect(() => {
		if (formCtx.editCompanyForm === false) onSubmitHandler();
	}, [formCtx.editCompanyForm, onSubmitHandler]);

	return (
		<Flexbox direction="column" gap={20}>
			<Flexbox gap={10}>
				<img src={LocationIcon} alt="location icon" />
				<Typography type="h5">Brand Details</Typography>
			</Flexbox>
			<form className={styles['brand-details-form']}>
				<Wrapper>
					<Label label="Brand Name" />
					<InputField type="number" value={enteredBrandName} setEnteredValue={setEnteredBrandName} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="Entity Type" />
					<InputField type="text" placeholder="" value={enteredEntityType} setEnteredValue={setEnteredEntityType} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="EIN" />
					<InputField type="date" placeholder="" value={new Date(enteredEIN)} setEnteredValue={setEnteredEIN} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="EIN Issuing Country" />
					<InputField type="text" placeholder="" value={enteredEINIssuingCountry} setEnteredValue={setEnteredEINIssuingCountry} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="Vertical" />
					<InputField type="number" placeholder="" value={enteredVertical} setEnteredValue={setEnteredVertical} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="Stock Symbol" />
					<InputField type="number" placeholder="" value={enteredStockSymbol} setEnteredValue={setEnteredStockSymbol} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="Stock Exchange" />
					<InputField type="number" placeholder="" value={enteredStockExchange} setEnteredValue={setEnteredStockExchange} disabled={!formCtx.editCompanyForm} />
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
