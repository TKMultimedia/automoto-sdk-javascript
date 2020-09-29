export default interface IGarageResponse {
  id: number;
  garage_name: string;
  address: string;
  phone: number;
  city: string;
  country: string;
  lat: number;
  lon: number;
  logo: string;
  rcs_number: number;
  vat_number: number;
  is_brand_representation: number;
  is_brand_subsidiary: number;
  is_favorite: boolean;
  status: number;
  holiday_start: number;
  holiday_end: number;
  description: string;
  user_id: number;
  type_garage_id: number;
  category_vehicle_id: number;
  insurance_accepted_id: number;
  licensed_insurance_id: number;
  payment_method_id: number;
}