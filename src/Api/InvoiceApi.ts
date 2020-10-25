import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IInvoiceListResponse from '../ResponseModel/IInvoiceListResponse';
import IInvoice from '../Model/IInvoice';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */
class InvoiceApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getAllInvoices(page: number, limit: number): AxiosPromise<IInvoiceListResponse> {
    return this.http.get('car-owner/invoice', {
      params: {
        page,
        limit
      }
    });
  }

  public getInvoiceById(invoiceId: string): AxiosPromise<IInvoice> {
    return this.http.get(`car-owner/invoice/${invoiceId}`);
  }

  public getInvoicesByPlateNumber(
    page: number,
    limit: number,
    plateNumber: string): AxiosPromise<IInvoiceListResponse> {
    return this.http.get('car-owner/invoice/plate-number', {
      params: {
        page,
        limit,
        license_plate: plateNumber
      }
    });
  }
}

export default InvoiceApi;
