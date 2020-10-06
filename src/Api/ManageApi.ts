import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IGarageTypeResponse from '../ResponseModel/IGarageTypeResponse';
import IVehicleCategoryResponse from '../ResponseModel/IVehicleCategoryResponse';
import IServiceListResponse from '../ResponseModel/IServiceListResponse';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */
class ManageApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getGarageType(): AxiosPromise<IGarageTypeResponse[]> {
    return this.http.get('type-garage');
  }

  public getVehicleCategories(): AxiosPromise<IVehicleCategoryResponse[]> {
    return this.http.get('category-vehicle');
  }

  public getServiceList(page: number, limit: number): AxiosPromise<IServiceListResponse> {
    return this.http.get('service-master', {
      params: {
        page,
        limit
      }
    });
  }
}

export default ManageApi;
