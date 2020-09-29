export default interface IPendingProduct {
    code: string;
    name: string;
    type: string;
    total: number;
    isRemoved?: boolean;
    id: number;
    currency: string;
    metadata: any; // tslint:disable-line
}
