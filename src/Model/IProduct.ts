export default interface IProduct {
    internalCode: string;
    vendorProductCode: string;
    type: string;
    name: string;
    description: string;
    price: number;
    actualPrice: number;
    displayPrice: number;
    currency: string;
    actualCurrency: string;
    displayCurrency: string;
    metadata: any; // tslint:disable-line
}
