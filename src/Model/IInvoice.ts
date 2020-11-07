import { ICustomerGarage } from './ICustomerGarage';
import IGarage from './IGarage';
import IInvoiceService from './IInvoiceService';
import IUploadImage from './IUploadImage';

export default interface IInvoice {
  id?: number;
  garage_id: number;
  appointment_id: number;
  title: string;
  image: string | IUploadImage;
  date_invoice: number;
  user_id: number;
  m_service_garages: string;
  service_name: string[];
  discount: number;
  tax: number;
  total: number;
  comments: string;
  content_refuse: string;
  status: number;
  garage: IGarage;
  customer_garage: ICustomerGarage;
  invoice_services: IInvoiceService[];
}
