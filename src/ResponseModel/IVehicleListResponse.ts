import IVehicle from '../Model/IVehicle';

export default interface IVehicleListResponse {
  count: number;
  rows: IVehicle[];
}
