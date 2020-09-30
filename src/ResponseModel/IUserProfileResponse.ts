import IAddress from '../Model/IAddress';

export default interface IUserProfileResponse {
  id: string;
  email: string;
  first_name: string;
  name: string;
  company_name: string;
  phone: string;
  image_logo: string;
  referral_id: string;
  status: number;
  is_company: number;
  is_lock: number;
  is_delete: number;
  rcs_number: number;
  vat_number: number;
  number_max_vehicle: number;
  number_max_appointment: number;
  role: number;
  code_reset_password: string;
  code_created_at: number;
  paid_created_at: number;
  lock_created_at: number;
  created_at: string;
  updated_at: string;
  fee_vehicle_id: number;
  fee_garage_id: number;
  addresses: IAddress[];
  createdAt: number;
  updatedAt: number;
  image?: {
    name: string;
    extension: string;
    base64: string;
  };
}
