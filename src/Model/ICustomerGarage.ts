import IAddress from './IAddress';
import IVehicle from './IVehicle';

export interface ICustomerGarage {
  id?: number;
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
  vehicle: IVehicle;
}
