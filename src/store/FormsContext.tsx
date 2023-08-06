import React from 'react';

export type IFormsActionType = 'SAVE_COMPANY_DETAILS' | 'SAVE_CONTACT_DETAILS' | 'EDIT_COMPANY_DETAILS' | 'EDIT_CONTACT_DETAILS' | 'EDIT_REGISTERED_CAMPAIGNS';

export interface IFormsAction {
	type: IFormsActionType;
	payload: any;
}

export interface IBrandForm {
	brandName: number;
	entityType: string;
	ein: string;
	einIssuingCountry: string;
	vertical: number;
	stockSymbol: number;
	stockExchange: number;
}

export interface IPersonalDetailsForm {
	firstName: string;
	lastName: string;
	postalCode: number;
	state: string;
	address: string;
	city: string;
	country: string;
	registeredOn: string;
}

export interface IOtherDetailsForm {
	website: string;
	referenceID: number;
	mobilePhone: number;
	otpConfirmationDate: number;
}

export const defaultOtherDetailState: IOtherDetailsForm = {
	website: 'American Express (4152)',
	referenceID: 98621620,
	mobilePhone: 98621620,
	otpConfirmationDate: 98621620
};

export const defaultPersonalDetailState: IPersonalDetailsForm = {
	firstName: 'Phone.com MVP premium',
	lastName: 'Phone.com MVP premium',
	postalCode: 1100011,
	country: 'France',
	state: 'Paris',
	address: 'somewhere in the world',
	city: 'somewhere else',
	registeredOn: 'sometime'
};

export const defaultBrandState: IBrandForm = {
	brandName: 567235910286,
	entityType: 'Phone.com MVP premium',
	ein: '1231233',
	einIssuingCountry: 'American Express (4152)',
	vertical: 98621620,
	stockSymbol: 98621620,
	stockExchange: 567235910286
};

export interface IFormsState {
	editCompanyForm: boolean;
	editContactForm: boolean;
	editRegisteredCampaignsForm: boolean;
	brandForm: IBrandForm;
	personalDetailsForm: IPersonalDetailsForm;
	otherDetailsForm: IOtherDetailsForm;
}

export const defaultFormsState: IFormsState = {
	editCompanyForm: false,
	editContactForm: false,
	editRegisteredCampaignsForm: false,
	brandForm: defaultBrandState,
	personalDetailsForm: defaultPersonalDetailState,
	otherDetailsForm: defaultOtherDetailState
};

export const deafultFormsContext: IFormsContext = {
	state: defaultFormsState,
	dispatch: (item: IFormsAction) => {}
};

export interface IFormsContext {
	state: IFormsState;
	dispatch: React.Dispatch<IFormsAction>;
}

const FormsContext = React.createContext<IFormsContext>(deafultFormsContext);

export default FormsContext;
