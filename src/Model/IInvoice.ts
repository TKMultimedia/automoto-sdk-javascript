import { ICustomerGarage } from './ICustomerGarage';
import IGarage from './IGarage';
import IInvoiceService from './IInvoiceService';

export default interface IInvoice {
  id: number;
  garage_id: number;
  appointment_id: number;
  user_id: number;
  discount: string;
  comments: string;
  content_refuse: string;
  status: number;
  garage: IGarage;
  customer_garage: ICustomerGarage;
  invoice_services: IInvoiceService;
}
