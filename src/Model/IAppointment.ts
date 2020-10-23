import AppointmentStatus from '../Enum/AppointmentStatus';
import { ICustomerGarage } from './ICustomerGarage';
import IGarage from './IGarage';

export default interface IAppointment {
  id?: number;
  date_schedule: number;
  time_from: string;
  time_to: string;
  description: null;
  status: AppointmentStatus;
  is_send_quotation: number;
  created_at: string;
  updated_at: string;
  user_id: string;
  garage_id: number;
  customer_garage_id: number;
  staff_garage_id: null;
  employee_company_id: null;
  customer_garage: ICustomerGarage;
  garage: IGarage;
}
