import IInvoice from '../Model/IInvoice';

export default interface IInvoiceListResponse {
  count: number;
  rows: IInvoice[];
}
