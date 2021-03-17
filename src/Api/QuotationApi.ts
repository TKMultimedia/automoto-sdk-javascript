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
    refusedComment?: string,
    rejectedComment?: string
  ): AxiosPromise<IGeneralResponse> {
    let param = '';
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
    if(_isEmpty(rejectedComment) === false) {
      requestBody = {
        quotation_id: quotationId,
        content: rejectedComment
      };
      param = '/ask-for-update'
    }
    if(rejectedComment && param) {
      return this.http.post(`car-owner/quotation${rejectedComment ? param : ''}`, requestBody);
    }
    return this.http.put(`car-owner/quotation`, requestBody);
  }
}

export default QuotationApi;
