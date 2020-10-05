import IAddress from './IAddress';

export default interface IAppointment {
  id?: number;
  date_schedule: number;
  time_schedule: string;
  garage_id: number;
  description: string;
  customer_garage: {
    gender: string;
    category_vehicle_id: number;
    garage_id: number;
    vehicle_id: number;
    user_id: number;
    name: string;
    first_name: string;
    email: string;
    phone: string;
    license_plate: string;
    serial_number: string;
    model: string;
    brand: string;
    type_customer: number;
    company_name: string;
    address: IAddress;
  };
  service_garage_id: number;
}
