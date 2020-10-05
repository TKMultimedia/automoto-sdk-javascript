export default interface IGarage {
  id: number;
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
  user_id: number;
  type_garage: number[];
  category_vehicle: number[];
  insurance_accepted: number[];
  licensed_insurance: number[];
  payment_method: number[];
}
