import IVehicle from './IVehicle';

export default interface IEmployee {
  id?: string;
  gender: string;
  first_name: string;
  last_name: string;
  department: string;
  job_title: string;
  direct_phone: number;
  phone: number;
  email: string;
  password: string;
  is_contact_person?: number;
  is_reponsible?: number;
  company_name: string;
  driving_license: string;
  is_same_company_address: number;
  company_address?: string;
  company_zipcode?: string;
  company_city?: string;
  company_country?: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  deletedAt: string;
  vehicles: IVehicle;
}
