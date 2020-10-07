import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import ISearchGarageRequest from '../RequestModel/ISearchGarageRequest';
import IGarageResponse from '../ResponseModel/IGarageResponse';
import { wrapAxiosResponse } from '../Utility/DataTransformUtility';
import IVehicle from '../Model/IVehicle';
import IVehicleListResponse from '../ResponseModel/IVehicleListResponse';
import IGeneralRequestParams from '../RequestModel/IGeneralRequestParams';
import IAddVehicleResponse from '../ResponseModel/IAddVehicleResponse';

/**
 * @since v1.0.0
 */
class VehicleApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public searchGarage(searchGarageRequest: ISearchGarageRequest): AxiosPromise<IGarageResponse[]> {
    return this.http.post('vehicle/search-garage', searchGarageRequest);
  }

  public getVehicleInfoByPlateNumber(plateNumber: string): AxiosPromise<IVehicle> {
    // Temporary return mock vehicle data
    return Promise.resolve(wrapAxiosResponse<IVehicle>({
      license_plate: plateNumber,
      image_vehicle: '',
      brand: 'BMW',
      model: '5666',
      version: '2.0MT',
      type_vehicle: 'SUV',
      power: '110 CV',
      fuel: 'diezel',
      gearbox: 'Manual',
      number_door: '05',
      serial_number: '123456789',
      manufacture_year: 2015,
      environment_pelle: 1,
      assurance_assistance: '',
      contact_assistance: '',
      contract_number_assistance: '',
      phone_assistance: '',
      brand_assistance: '',
      brand_contract: '',
      brand_phone: '',
      is_new: 1,
      last_vehicle_inspection: 'Manual',
      category_vehicle_id: 1
    }));
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
}

export default VehicleApi;
