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

export const defaultBrandState: IBrandForm = {
	brandName: 567235910286,
	entityType: 'Phone.com MVP premium',
	ein: '02/24/2023',
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
}

export const defaultFormsState: IFormsState = {
	editCompanyForm: false,
	editContactForm: false,
	editRegisteredCampaignsForm: false,
	brandForm: defaultBrandState
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
