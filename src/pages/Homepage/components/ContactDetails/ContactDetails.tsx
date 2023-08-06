import React, { useContext, useEffect, useMemo, useState } from 'react';
import styles from './ContactDetails.module.scss';
import { Wrapper } from '../CompanyDetails/components/BrandDetails/BrandDetails';
import Label from '../../../../components/Label/Label';
import InputField from '../../../../components/InputField/InputField';
import FormsContext, { IContactDetails } from '../../../../store/FormsContext';
import Flexbox from '../../../../foundations/Flexbox/Flexbox';
import LocationIconPink from '../../../../assets/homepage/location-icon-pink.svg';
import LocationIconBlue from '../../../../assets/homepage/location-icon-blue.svg';

const ContactDetails = React.memo(() => {
	const { state: formCtx, dispatch: dispatchFormAction } = useContext(FormsContext);

	const [emailAddress, setemailAddress] = useState(formCtx.contactForm?.emailAddress);
	const [phoneNumber, setphoneNumber] = useState(formCtx.contactForm?.phoneNumber);

	const contactDetailsToSave: IContactDetails = useMemo(() => {
		return {
			emailAddress,
			phoneNumber
		};
	}, [emailAddress, phoneNumber]);

	useEffect(() => {
		if (formCtx.editContactForm === false) {
			dispatchFormAction({ type: 'SAVE_CONTACT_DETAILS', payload: contactDetailsToSave });
		}
	}, [contactDetailsToSave, dispatchFormAction, formCtx.editContactForm]);

	return (
		<form className={styles['contact-details-con']}>
			<Flexbox gap={10} alignItems="center">
				<img src={LocationIconPink} alt="location icon" />
				<Wrapper>
					<Label label="Email Address" />
					<InputField type="text" value={emailAddress} setEnteredValue={setemailAddress} disabled={!formCtx.editContactForm} />
				</Wrapper>
			</Flexbox>
			<Flexbox gap={10} alignItems="center">
				<img src={LocationIconBlue} alt="location icon" />
				<Wrapper>
					<Label label="Phone Number" />
					<InputField type="number" value={phoneNumber} setEnteredValue={setphoneNumber} disabled={!formCtx.editContactForm} />
				</Wrapper>
			</Flexbox>
		</form>
	);
});

export default ContactDetails;
