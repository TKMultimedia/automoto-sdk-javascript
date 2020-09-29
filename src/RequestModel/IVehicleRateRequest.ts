import { LocationType } from '../Enum/LocationType';
import IDebuggableRequest from './IDebuggableRequest';

export default interface IVehicleRateRequest extends IDebuggableRequest {
  driverCountryCode: string;
  driverAge: number;
  pickupCoordinate: string;
  returnCoordinate: string;
  pickupTime: string;
  returnTime: string;
  pickupLocationTypes?: LocationType[];
  returnLocationTypes?: LocationType[];
  pickupDepotIds?: number[];
  returnDepotIds?: number[];
  supplierCodes?: string[];
  debug: boolean;
  debugTag: string;
  bookingEngine?: string;
  currency?: string;
  badgeId?: number;
}
