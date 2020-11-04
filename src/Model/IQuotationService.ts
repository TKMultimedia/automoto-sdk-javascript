import IServiceGarage from './IServiceGarage';

export default interface IQuotationService {
  id: number;
  service_garage_id: number;
  quantity: number;
  price: number;
  service_garage: IServiceGarage;
  total: number;
}
