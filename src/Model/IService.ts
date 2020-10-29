export default interface IService {
  id?: number;
  name: string;
  description: string;
  estimated_time: number;
  brand: string;
  category_vehicle_id: number;
  m_service_id?: number;
  garage_id?: number;
  is_admin_created: number;
  parent_id: number;
  children?: IService[];
}
