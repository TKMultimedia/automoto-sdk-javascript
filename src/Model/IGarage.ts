import IGarageImage from './IGarageImage';
import IGarageUser from './IGarageUser';
import IGarageWorkingTime from './IGarageWorkingTime';

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
  holiday_start: number;
  holiday_end: number;
  description: string;
  category_vehicle: number[];
  insurance_accepted: number[];
  licensed_insurance: number[];
  payment_methods: number[];
  type_garages: string[];
  is_fav: boolean;
  is_working: boolean;
  quantity_invoice: number;
  distance: number;
  createdAt: number;
  user: IGarageUser;
  workshop_number: string;
  zip_code: number;
  image_garages: IGarageImage[];
  work_time_garages: IGarageWorkingTime[];
}
