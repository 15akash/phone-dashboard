import React, { Reducer, useCallback, useReducer } from 'react';
import FormsContext, { IFormsAction, IFormsState, defaultFormsState } from './FormsContext';

const FormsProvider = React.memo((props: any) => {
	const formsReducer = useCallback((state: IFormsState, action: IFormsAction) => {
		if (action.type === 'SAVE_COMPANY_DETAILS') {
			return {
				...state,
				brandForm: action.payload.brandFormValues,
				personalDetailsForm: action.payload.personalFormValues,
				otherDetailsForm: action.payload.otherFormValues
			};
		}

		if (action.type === 'SAVE_CONTACT_DETAILS') {
		}

		if (action.type === 'EDIT_COMPANY_DETAILS') {
			return { ...state, editCompanyForm: action.payload };
		}

		if (action.type === 'EDIT_CONTACT_DETAILS') {
			return { ...state, editContactForm: action.payload };
		}
		if (action.type === 'EDIT_REGISTERED_CAMPAIGNS') {
			return { ...state, editRegisteredCampaignsForm: action.payload };
		}
		return state;
	}, []);
	const initReducer = useCallback(() => {
		return defaultFormsState;
	}, []);

	const [formsState, dispatchFormsAction] = useReducer<Reducer<IFormsState, IFormsAction>, IFormsState>(formsReducer, defaultFormsState, initReducer);

	return <FormsContext.Provider value={{ state: formsState, dispatch: dispatchFormsAction }}>{props.children}</FormsContext.Provider>;
});

export default FormsProvider;
