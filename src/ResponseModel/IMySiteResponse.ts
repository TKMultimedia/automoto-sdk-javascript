import IDebuggableResponse from './IDebuggableResponse';

interface IPhoneNumber {
    label: string;
    number: string;
    operationHours: string;
}

export default interface IMySiteResponse extends IDebuggableResponse {
    alias: string;
    webUrl: string;
    siteName: string;
    senderName: string;
    senderEmail: string;
    marketingName: string;
    homePageUrl: string;
    contactUsEmail: string;
    contactUsUrl: string;
    hiccupToken: string;
    hiccupRedirectUrl: string;
    googleApiKey: string;
    googleAnalyticsCode: string;
    headScript: string;
    footerScript: string;
    bodyScript: string;
    company: {
        name: string;
        alias: string;
        type: string;
    };
    phoneNumbers: IPhoneNumber[];
    invoiceCompanyName: string;
    invoiceCompanyAbn: string;
}
