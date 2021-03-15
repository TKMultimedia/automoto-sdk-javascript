import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IInvoiceListResponse from '../ResponseModel/IInvoiceListResponse';
import IInvoice from '../Model/IInvoice';
import InvoiceType from '../Enum/InvoiceType';

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
    invoiceType: InvoiceType| undefined,
    plateNumber: string): AxiosPromise<IInvoiceListResponse> {
    const queryParam : any = {
      page,
      limit,
      license_plate: plateNumber
    }
    if(invoiceType) {
      queryParam.type_invoice = invoiceType
    }
    return this.http.get('car-owner/invoice/plate-number', {
      params: queryParam
    });
  }

  public addRepairInvoiceByPlateNumber(
    invoice: IInvoice,
   ): AxiosPromise<IInvoiceListResponse> {
    return this.http.post('car-owner/invoice', invoice);
  }

  public updateRepairInvoiceByPlateNumber(
    invoice: IInvoice,
   ): AxiosPromise<IInvoiceListResponse> {
    return this.http.put('car-owner/invoice', invoice);
  }
}

export default InvoiceApi;
