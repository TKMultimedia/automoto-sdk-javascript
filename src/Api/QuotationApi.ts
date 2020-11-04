import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { isEmpty as _isEmpty } from 'lodash';
import IQuotationResponse from '../ResponseModel/IQuotationResponse';
import QuotationStatus from '../Enum/QuotationStatus';
import { IGeneralResponse } from '../ResponseModel/IErrorResponse';
import IQuotationUpdateRequest from '../RequestModel/IQuotationUpdateRequest';

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

  public updateQuotation(
    quotationId: number,
    status: QuotationStatus,
    comments?: string,
    refusedComment?: string
  ): AxiosPromise<IGeneralResponse> {
    let requestBody: IQuotationUpdateRequest = {
      id: quotationId,
      status
    };

    if (_isEmpty(comments) === false) {
      requestBody = {
        ...requestBody,
        comments
      };
    }

    if (_isEmpty(refusedComment) === false) {
      requestBody = {
        ...requestBody,
        content_refuse: refusedComment
      };
    }

    return this.http.put('car-owner/quotation', requestBody);
  }
}

export default QuotationApi;
