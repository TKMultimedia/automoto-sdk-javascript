import { ICustomerGarage } from './ICustomerGarage';

export default interface IAppointment {
  id?: number;
  date_schedule: number;
  time_schedule: string;
  garage_id: number;
  description: string;
  customer_garage: ICustomerGarage;
  service_garage_id: number;
}
