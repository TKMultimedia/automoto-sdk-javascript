import QuotationStatus from '../Enum/QuotationStatus';
import IAppointment from './IAppointment';
import { ICustomerGarage } from './ICustomerGarage';
import IGarage from './IGarage';
import IQuotationService from './IQuotationService';

export default interface IQuotation {
  id?: number;
  garage_id: number;
  appointment_id: number;
  user_id: string;
  discount: number;
  comments: string;
  content_refuse: string;
  status: QuotationStatus;
  garage: IGarage;
  customer_garage: ICustomerGarage;
  customer_garage_id: number;
  quotation_services: IQuotationService[];
  appointment: IAppointment;
  employee_company_id: number;
  staff_garage: string;
  staff_garage_id: number;
  tax: number;
  total: number;
}
