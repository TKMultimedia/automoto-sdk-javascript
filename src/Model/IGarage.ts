import IGarageImage from './IGarageImage';
import IGarageUser from './IGarageUser';
import IGarageWorkingTime from './IGarageWorkingTime';
import IGeneralMappingData from './IGeneralMappingData';

export default interface IGarage {
  id?: number;
  garage_name: string;
  address: string;
  city: string;
  country: string;
  lat: number;
  lon: number;
  logo: string;
  rcs_number: string;
  vat_number: string;
  is_brand_representation: number;
  is_brand_subsidiary: number;
  status: number;
  is_delete: number;
  is_lock: number;
  holiday_start: number;
  holiday_end: number;
  number_max_appointment: number;
  description: string;
  category_vehicle: string;
  insurance_accepted: string;
  licensed_insurance: string;
  payment_method: string;
  payment_methods: IGeneralMappingData[];
  type_garages: IGeneralMappingData[];
  is_fav: boolean;
  is_working: boolean;
  quantity_invoice: number;
  distance: number;
  createdAt: number;
  updatedAt: number;
  user: IGarageUser;
  workshop_number: string;
  zip_code: number;
  image_garages: IGarageImage[];
  work_time_garages: IGarageWorkingTime[];
  service_garages: IGeneralMappingData[]
}
