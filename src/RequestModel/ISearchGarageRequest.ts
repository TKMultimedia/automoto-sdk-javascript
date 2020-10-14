export default interface ISearchGarageRequest {
  license_plate: string;
  name_service: string;
  address: string;
  lat: number;
  lon: number;
  page: number;
  limit: number;
  filter_type?: number;
}
