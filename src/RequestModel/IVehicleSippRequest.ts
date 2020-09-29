import IDebuggableRequest from './IDebuggableRequest';

export default interface IVehicleSippRequest extends IDebuggableRequest {
  countryCode?: string;
  supplierCode?: string;
  sippCode?: string;
  vehicleName?: string;
  seatCount?: number;
  doorCount?: number;
  transmissionType?: string;
  hasAirCondition?: boolean;
}
