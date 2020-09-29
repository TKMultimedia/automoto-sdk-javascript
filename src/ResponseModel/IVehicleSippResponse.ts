import IDebuggableResponse from './IDebuggableResponse';

export default interface IVehicleSippResponse extends IDebuggableResponse {
  sippId: number;
  supplierCode: string;
  countryCode: string;
  vehicleCategory: string;
  vehicleClass: string;
  sippCode: string;
  vehicleName: string;
  doorCount: number;
  seatCapacity: number;
  smallLuggageCount: number;
  largeLuggageCount: number;
  transmission: string;
  airCondition: boolean;
  vehicleImageURL: string;
}
