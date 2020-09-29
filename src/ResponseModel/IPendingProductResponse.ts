import IDebuggableResponse from './IDebuggableResponse';
import IPendingProduct from '../Model/IPendingProduct';

export default interface IPendingProductsResponse extends IDebuggableResponse {
    currency: string;
    id: number;
    price: number;
    product: IPendingProduct;
    metadata: any; // tslint:disable-line
}
