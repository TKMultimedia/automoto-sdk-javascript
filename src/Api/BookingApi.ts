import AbstractApi from './AbstractApi';
import Axios, { AxiosPromise, AxiosRequestConfig, Canceler } from 'axios';
import IBookingRequest from '../RequestModel/IBookingRequest';
import IBookingResponse from '../ResponseModel/IBookingResponse';
import ICancelSurveyRequest from '../RequestModel/ICancelSurveyRequest';
import ICancelOption from '../Model/ICancelOption';
import IPendingProductsResponse from '../ResponseModel/IPendingProductResponse';
import IPendingProductPaymentRequest from '../RequestModel/IPendingProductPaymentRequest';
import IPayPendingBookingRequest from '../RequestModel/IPayPendingBookingRequest';
import IProduct from '../Model/IProduct';

/**
 * @since v2.0.0
 */
class BookingApi extends AbstractApi {

    private readonly baseConfig: AxiosRequestConfig = {
        params: {
            'dynamic-extra': true
        }
    };

    public retrieveBooking(lastName: string, confirmationNumber: string): AxiosPromise<IBookingResponse> {
        return this.http.get(
            'retrieve-booking',
            {
                params: {
                    'last-name': lastName,
                    'confirmation-number': confirmationNumber
                }
            }
        );
    }

    public create(bookingRequest: IBookingRequest): AxiosPromise<IBookingResponse> {
        return this.http.post('bookings', bookingRequest, this.baseConfig);
    }

    public get(encryptedId: string): AxiosPromise<IBookingResponse> {
        return this.http.get(`bookings/${encryptedId}`);
    }

    public update(encryptedId: string, bookingRequest: IBookingRequest): AxiosPromise<IBookingResponse> {
        return this.http.put(`bookings/${encryptedId}`, bookingRequest, this.baseConfig);
    }

    public cancel(encryptedId: string, bookingEngine?: string): AxiosPromise {
        return this.http.patch(`bookings/${encryptedId}/cancel?booking-engine=${bookingEngine}`);
    }

    public getAvailableProducts(encryptedId: string): AxiosPromise<IProduct[]> {
        return this.http.get(`bookings/${encryptedId}/available-products`);
    }

    public payPendingProducts(encryptedId: string, paymentRequest: IPendingProductPaymentRequest,  callback: (cancel: Canceler) => void): AxiosPromise {
        return this.http.post(`bookings/${encryptedId}/payments`, paymentRequest,  {
            cancelToken: new Axios.CancelToken((cancel: Canceler): void => {
                callback(cancel);
            }),
            // prevent axios parsing empty response
            transformResponse: (res: string): string => res
        });
    }

    public payPendingBooking(encryptedId: string, paymentRequest: IPayPendingBookingRequest, callback: (cancel: Canceler) => void): AxiosPromise {
        return this.http.post(`bookings/${encryptedId}/payments`, paymentRequest, {
            cancelToken: new Axios.CancelToken((cancel: Canceler): void => {
                callback(cancel);
            }),
            transformResponse: (res: string): string => res
        });
    }

    public getPendingProducts(encryptedId: string): AxiosPromise<IPendingProductsResponse[]> {
        return this.http.get(`bookings/${encryptedId}/pending-products`);
    }

    public deletePendingProducts(encryptedId: string, pendingProductId: number, callback: (cancel: Canceler) => void): AxiosPromise {
        return this.http.delete(`bookings/${encryptedId}/pending-products/${pendingProductId}`, {
            cancelToken: new Axios.CancelToken((cancel: Canceler): void => {
                callback(cancel);
            }),
            // prevent axios parsing empty response
            transformResponse: (res: string): string => res
        });
    }

    public getCancelOptions(): AxiosPromise<ICancelOption[]> {
        return this.http.get(`cancel-survey-options`);
    }

    public cancelSurvey(cancelSurveyRequest: ICancelSurveyRequest): AxiosPromise {
        return this.http.post('cancel-surveys', cancelSurveyRequest, {
            transformResponse: [function(data: object): object {
                return data;
            }]
        });
    }

    /**
     * @return PromiseLike contains Promise of PDF Binary
     */
    public getInvoice(encryptedId: string): AxiosPromise<Blob> {
        return this.http.get(
            'bookings/payment-invoice/' + encryptedId,
            {
                responseType: 'blob',
                transformResponse: (data: string | undefined): Blob | undefined => {
                    if (typeof data === 'undefined') {
                        return undefined;
                    }

                    return new Blob([data], {type: 'application/pdf'});
                }
            }
        );
    }
}

export default BookingApi;
