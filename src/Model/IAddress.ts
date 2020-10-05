export default interface IAddress {
  id?: number;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  lat: number;
  lon: number;
  created_at?: string;
  updated_at?: string;
  deletedAt?: string;
  user_id?: string;
  customer_garage_id?: number;
  employee_company_id?: string;
}
