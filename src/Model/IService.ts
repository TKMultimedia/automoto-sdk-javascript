export default interface IService {
  id?: number;
  name: string;
  description: string;
  estimated_time: string;
  brand: string;
  category_vehicle_id: number;
  m_service_id?: number;
  garage_id?: number;
}
