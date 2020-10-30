import QuotationStatus from '../Enum/QuotationStatus';
import IAppointment from './IAppointment';
import { ICustomerGarage } from './ICustomerGarage';
import IGarage from './IGarage';
import IQuotationService from './IQuotationService';

export default interface IQuotation {
  id?: number;
  garage_id: number;
  appointment_id: number;
  user_id: number;
  discount: string;
  comments: string;
  content_refuse: string;
  status: QuotationStatus;
  garage: IGarage;
  customer_garage: ICustomerGarage;
  quotation_services: IQuotationService;
  appointment: IAppointment;
}
