import React, { useContext, useEffect, useMemo, useState } from 'react';
import LocationIcon from '../../../../../../assets/homepage/location-icon-green.svg';
import Flexbox from '../../../../../../foundations/Flexbox/Flexbox';
import Typography from '../../../../../../foundations/Typography/Typography';
import styles from '../BrandDetails/BrandDetails.module.scss';
import Label from '../../../../../../components/Label/Label';
import InputField from '../../../../../../components/InputField/InputField';
import { Wrapper } from '../BrandDetails/BrandDetails';
import FormsContext, { IOtherDetailsForm } from '../../../../../../store/FormsContext';

interface IOtherDetailsProps {
	otherDetailsForm: (items: IOtherDetailsForm) => void;
}

const OtherDetails = React.memo((props: IOtherDetailsProps) => {
	const { state: formCtx } = useContext(FormsContext);

	const [website, setwebsite] = useState(formCtx.otherDetailsForm?.website);
	const [referenceID, setreferenceID] = useState(formCtx.otherDetailsForm?.referenceID);
	const [mobilePhone, setmobilePhone] = useState(formCtx.otherDetailsForm?.mobilePhone);
	const [otpConfirmationDate, setotpConfirmationDate] = useState(formCtx.otherDetailsForm?.otpConfirmationDate);

	const othersFormToSave: IOtherDetailsForm = useMemo(() => {
		return {
			website,
			referenceID,
			mobilePhone,
			otpConfirmationDate
		};
	}, [mobilePhone, otpConfirmationDate, referenceID, website]);

	useEffect(() => {
		if (formCtx.editCompanyForm === false) {
			props.otherDetailsForm(othersFormToSave);
		}
	}, [othersFormToSave, formCtx.editCompanyForm, props]);

	return (
		<Flexbox direction="column" gap={20}>
			<Flexbox alignItems="center" gap={10}>
				<img src={LocationIcon} alt="location icon" />
				<Typography type="h5">Other Details</Typography>
			</Flexbox>
			<form className={styles['brand-details-form']}>
				<Wrapper>
					<Label label="Website" />
					<InputField type="text" value={website} setEnteredValue={setwebsite} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="Reference ID" />
					<InputField type="number" placeholder="" value={referenceID} setEnteredValue={setreferenceID} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="Mobile Phone" />
					<InputField type="number" placeholder="" value={mobilePhone} setEnteredValue={setmobilePhone} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="OTP Confirmation Date" />
					<InputField type="text" placeholder="" value={otpConfirmationDate} setEnteredValue={setotpConfirmationDate} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
			</form>
		</Flexbox>
	);
});

export default OtherDetails;
