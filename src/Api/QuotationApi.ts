import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IQuotationResponse from '../ResponseModel/IQuotationResponse';
import QuotationStatus from '../Enum/QuotationStatus';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */
class QuotationApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getQuotationByVehiclePlateNumber(
    page: number,
    limit: number,
    plateNumber: string,
    status: QuotationStatus): AxiosPromise<IQuotationResponse> {
    return this.http.get(
      'car-owner/quotation',
      {
        params: {
          page,
          limit,
          license_plate: plateNumber,
          status
        }
      });
  }
}

export default QuotationApi;
