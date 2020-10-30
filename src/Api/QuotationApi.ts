import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IQuotationResponse from '../ResponseModel/IQuotationResponse';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */
class QuotationApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getQuotationByVehiclePlateNumber(
    limit: number,
    page: number,
    plateNumber: string): AxiosPromise<IQuotationResponse> {
    return this.http.get(
      'car-owner/quotation',
      {
        params: {
          page,
          limit,
          license_plate: plateNumber
        }
      });
  }
}

export default QuotationApi;
