import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IGarageResponse from '../ResponseModel/IGarageResponse';
import { IGeneralResponse } from '../ResponseModel/IErrorResponse';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */
class FavoriteApi extends AbstractApi {
  private readonly CAROWNERFAVORITE_ENDPOINT: string = 'car-owner/favorite';

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getFavoriteGarages(page: number, limit: number): AxiosPromise<IGarageResponse[]> {
    return this.http.get(this.CAROWNERFAVORITE_ENDPOINT, {
      params: {
        page,
        limit
      }
    });
  }

  public setFavoriteGarage(vehicleId: number, garageId: number): AxiosPromise<IGeneralResponse> {
    return this.http.post(this.CAROWNERFAVORITE_ENDPOINT, {
      vehicle_id: vehicleId,
      garage_id: garageId
    });
  }
}

export default FavoriteApi;
