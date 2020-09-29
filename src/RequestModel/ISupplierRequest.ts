import IDebuggableRequest from './IDebuggableRequest';

export default interface ISupplierRequest extends IDebuggableRequest {
  pickupTime: string;
  returnTime: string;
  pickupDepotId: number;
  returnDepotId: number;
  driverCountryCode: string;
  driverAge: number;
  sippCode: string;
  rateId?: string;
  onlyIrt?: boolean;
  code: string;
  bookingEngine?: string;
  debug?: boolean;
  debugTag?: string;
  extras?: IDynamicExtrasRequest[];
  badgeId?: number;
  currency?: string;
}

export interface IDynamicExtrasRequest {
  id: number;
  quantity: number;
}
