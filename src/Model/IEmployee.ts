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
  company_name: string;
  driving_license: string;
  is_same_company_address: number;
  company_address?: string;
  company_zipcode?: number;
  company_city?: string;
  company_country?: string;
}
