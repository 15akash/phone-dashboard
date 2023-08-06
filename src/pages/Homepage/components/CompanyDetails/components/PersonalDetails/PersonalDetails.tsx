import React, { useContext, useEffect, useMemo, useState } from 'react';
import Flexbox from '../../../../../../foundations/Flexbox/Flexbox';
import Typography from '../../../../../../foundations/Typography/Typography';
import LocationIcon from '../../../../../../assets/homepage/location-icon-blue.svg';
import { Wrapper } from '../BrandDetails/BrandDetails';
import styles from '../BrandDetails/BrandDetails.module.scss';
import Label from '../../../../../../components/Label/Label';
import InputField from '../../../../../../components/InputField/InputField';
import FormsContext, { IPersonalDetailsForm } from '../../../../../../store/FormsContext';

interface IPersonalDetailsProps {
	personalDetailsForm: (item: IPersonalDetailsForm) => void;
}

const PersonalDetails = React.memo((props: IPersonalDetailsProps) => {
	const { state: formCtx } = useContext(FormsContext);

	const [firstName, setFirstName] = useState(formCtx.personalDetailsForm?.firstName);
	const [postalCode, setPostalCode] = useState(formCtx.personalDetailsForm?.postalCode);
	const [lastName, setLastName] = useState(formCtx.personalDetailsForm?.lastName);
	const [country, setCountry] = useState(formCtx.personalDetailsForm?.country);
	const [registeredOn, setRegisteredOn] = useState(formCtx.personalDetailsForm?.registeredOn);
	const [state, setState] = useState(formCtx.personalDetailsForm?.state);
	const [address, setAddress] = useState(formCtx.personalDetailsForm?.address);
	const [city, setCity] = useState(formCtx.personalDetailsForm?.city);

	const personalDetailsToSave: IPersonalDetailsForm = useMemo(() => {
		return {
			firstName: firstName,
			lastName: lastName,
			postalCode: postalCode,
			country: country,
			state: state,
			address: address,
			city: city,
			registeredOn: registeredOn
		};
	}, [address, city, country, firstName, lastName, postalCode, registeredOn, state]);

	useEffect(() => {
		if (formCtx.editCompanyForm === false) {
			props.personalDetailsForm(personalDetailsToSave);
		}
	}, [personalDetailsToSave, formCtx.editCompanyForm, props]);
	return (
		<Flexbox direction="column" gap={20}>
			<Flexbox gap={10} alignItems="center">
				<img src={LocationIcon} alt="location icon" />
				<Typography type="h5">Personal Details</Typography>
			</Flexbox>
			<form className={styles['brand-details-form']}>
				<Wrapper>
					<Label label="First Name" />
					<InputField type="text" value={firstName} setEnteredValue={setFirstName} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="Postal Code" />
					<InputField type="number" placeholder="" value={postalCode} setEnteredValue={setPostalCode} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="Last Name" />
					<InputField type="text" placeholder="" value={lastName} setEnteredValue={setLastName} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="Country" />
					<InputField type="text" placeholder="" value={country} setEnteredValue={setCountry} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="Registered On" />
					<InputField type="text" placeholder="" value={registeredOn} setEnteredValue={setRegisteredOn} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="State" />
					<InputField type="text" placeholder="" value={state} setEnteredValue={setState} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="Address" />
					<InputField type="text" placeholder="" value={address} setEnteredValue={setAddress} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
				<Wrapper>
					<Label label="City" />
					<InputField type="text" placeholder="" value={city} setEnteredValue={setCity} disabled={!formCtx.editCompanyForm} />
				</Wrapper>
			</form>
		</Flexbox>
	);
});

export default PersonalDetails;
