import React, { useContext, useEffect, useMemo, useState } from 'react';
import InputField from '../../../../../../components/InputField/InputField';
import Flexbox from '../../../../../../foundations/Flexbox/Flexbox';
import LocationIcon from '../../../../../../assets/homepage/location-icon-pink.svg';
import Typography from '../../../../../../foundations/Typography/Typography';
import styles from './BrandDetails.module.scss';
import Label from '../../../../../../components/Label/Label';
import FormsContext, { IBrandForm } from '../../../../../../store/FormsContext';

interface IBrandsDetailsProps {
	brandsForm: (item: IBrandForm) => void;
}

const BrandDetails = React.memo((props: IBrandsDetailsProps) => {
	const { state: formCtx } = useContext(FormsContext);
	const [enteredBrandName, setEnteredBrandName] = useState<number>(formCtx.brandForm?.brandName);
	const [enteredEntityType, setEnteredEntityType] = useState<string>(formCtx.brandForm?.entityType);
	const [enteredEIN, setEnteredEIN] = useState<string>(formCtx.brandForm?.ein);
	const [enteredEINIssuingCountry, setEnteredEINIssuingCountry] = useState<string>(formCtx.brandForm?.einIssuingCountry);
	const [enteredVertical, setEnteredVertical] = useState<number>(formCtx.brandForm?.vertical);
	const [enteredStockSymbol, setEnteredStockSymbol] = useState<number>(formCtx.brandForm?.stockSymbol);
	const [enteredStockExchange, setEnteredStockExchange] = useState<number>(formCtx.brandForm?.stockExchange);

	const brandsFormToSave: IBrandForm = useMemo(() => {
		return {
			brandName: enteredBrandName,
			entityType: enteredEntityType,
			ein: enteredEIN,
			einIssuingCountry: enteredEINIssuingCountry,
			vertical: enteredVertical,
			stockSymbol: enteredStockSymbol,
			stockExchange: enteredStockExchange
		};
	}, [enteredBrandName, enteredEIN, enteredEINIssuingCountry, enteredEntityType, enteredStockExchange, enteredStockSymbol, enteredVertical]);

	useEffect(() => {
		if (formCtx.editCompanyForm === false) {
			props.brandsForm(brandsFormToSave);
		}
	}, [brandsFormToSave, formCtx.editCompanyForm, props]);

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
					<InputField type="text" placeholder="" value={enteredEIN} setEnteredValue={setEnteredEIN} disabled={!formCtx.editCompanyForm} />
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
