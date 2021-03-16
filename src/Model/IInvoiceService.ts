import IServiceGarage from './IServiceGarage';

export default interface IInvoiceService {
  id: number;
  quantity: number;
  price: number;
  service_garage: IServiceGarage;
  total: number;
}
export interface IInvoiceServiceName {
  id: number;
  name: string;
  updatedAt?: number;
  createdAt?: number;
}
