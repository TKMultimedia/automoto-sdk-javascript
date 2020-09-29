export default interface IPaymentTransaction {
    paymentAccount: {
        id: number;
        name: string;
        invoiceCompanyAbn: string;
        invoiceCompanyName: string;
        invoicePostalAddress: string;
    };
    amount: number;
    current: string;
    statementDescriptor: string;
    description: string;
    type: string;
    invoiceMetadata: Array<{
        name: string;
        amount: number;
    }>;
}
