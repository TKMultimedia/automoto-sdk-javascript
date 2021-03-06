import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import ISearchGarageRequest from '../RequestModel/ISearchGarageRequest';
import IVehicle from '../Model/IVehicle';
import IVehicleListResponse from '../ResponseModel/IVehicleListResponse';
import IGeneralRequestParams from '../RequestModel/IGeneralRequestParams';
import IAddVehicleResponse from '../ResponseModel/IAddVehicleResponse';
import { IGeneralResponse } from '../ResponseModel/IErrorResponse';
import ISearchGarageResponse from '../ResponseModel/ISearchGarageResponse';

/**
 * @since v1.0.0
 */
class VehicleApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public searchGarage(searchGarageRequest: ISearchGarageRequest): AxiosPromise<ISearchGarageResponse> {
    return this.http.get('car-owner/garage/search-garage', { params: searchGarageRequest });
  }

  public getVehicleInfoByPlateNumber(lisensePlate: string): AxiosPromise<IVehicle> {
    return this.http.get('vehicle/license-plate', { params: { license_plate: lisensePlate } });
  }

  public getVehicleInfoByVehicleId(id: number): AxiosPromise<IVehicle> {
    return this.http.get(`vehicle/${id}`);
  }

  public getVehicles(page: number, limit: number, textSearch?: string): AxiosPromise<IVehicleListResponse> {
    let params: IGeneralRequestParams = {
      limit,
      page
    };

    if (typeof textSearch !== 'undefined') {
      params = {
        ...params,
        text_search: textSearch
      };
    }

    return this.http.get('vehicle', { params });
  }

  public addVehicle(vehicle: IVehicle): AxiosPromise<IAddVehicleResponse> {
    return this.http.post('vehicle', vehicle);
  }

  public deleteVehicle(id: number): AxiosPromise<IGeneralResponse> {
    return this.http.delete(`vehicle/${id}`);
  }

  public updateVehicle(vehicle: IVehicle): AxiosPromise<IGeneralResponse> {
    return this.http.put('vehicle', vehicle);
  }

}

export default VehicleApi;
