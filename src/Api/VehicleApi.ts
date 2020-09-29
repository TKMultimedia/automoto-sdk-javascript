import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import ISearchGarageRequest from '../RequestModel/ISearchGarageRequest';
import IGarageResponse from '../ResponseModel/IGarageResponse';

/**
 * @since v2.0.0
 */
class VehicleApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public searchGarage(searchGarageRequest: ISearchGarageRequest): AxiosPromise<IGarageResponse[]> {
    return this.http.post('vehicle/search-garage', searchGarageRequest);
  }
}

export default VehicleApi;
