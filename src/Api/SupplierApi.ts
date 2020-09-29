import AbstractApi from './AbstractApi';
import Axios, { AxiosPromise, AxiosRequestConfig, Canceler } from 'axios';
import ISupplierRequest, { IDynamicExtrasRequest } from '../RequestModel/ISupplierRequest';
import ISupplierTermResponse from '../ResponseModel/ISupplierTermResponse';
import ISupplierVehicleRateResponse from '../ResponseModel/ISupplierVehicleRateResponse';
import { forEach } from 'lodash';
import { cancelerCallback } from '../Types/CancellerCallback';

/**
 * @since v2.0.0
 */
class SupplierApi extends AbstractApi {

    public getTermAndCondition(code: string, supplierRequest: ISupplierRequest): AxiosPromise<ISupplierTermResponse> {
        const params: any = {// tslint:disable-line
            'pickup-time': supplierRequest.pickupTime,
            'return-time': supplierRequest.returnTime,
            'pickup-depot-id': supplierRequest.pickupDepotId,
            'return-depot-id': supplierRequest.returnDepotId,
            'driver-country-code': supplierRequest.driverCountryCode,
            'driver-age': supplierRequest.driverAge,
            'sipp-code': supplierRequest.sippCode,
            'rate-id': supplierRequest.rateId,
            'only-irt': supplierRequest.onlyIrt,
            'code': supplierRequest.code
        };

        if (typeof supplierRequest.bookingEngine !== 'undefined') {
            params['booking-engine'] = supplierRequest.bookingEngine;
        }

        return this.http.get(
            `suppliers/${code}/term`,
            {
                params
            }
        );
    }

    public getVehicleRatesBySippCode(code: string, sippCode: string, supplierRequest: ISupplierRequest, callback?: cancelerCallback):
        AxiosPromise<ISupplierVehicleRateResponse> {
            const params: any = { // tslint:disable-line
                'sipp-code': supplierRequest.sippCode,
                'driver-country-code': supplierRequest.driverCountryCode,
                'driver-age': supplierRequest.driverAge,
                'pickup-time': supplierRequest.pickupTime,
                'return-time': supplierRequest.returnTime,
                'pickup-depot-id': supplierRequest.pickupDepotId,
                'return-depot-id': supplierRequest.returnDepotId,
                'debug': supplierRequest.debug,
                'debug-tag': supplierRequest.debugTag,
                'rate-id': supplierRequest.rateId,
                'code': supplierRequest.code,
                'dynamic-extra': true
            };

            if (typeof supplierRequest.bookingEngine !== 'undefined') {
                params['booking-engine'] = supplierRequest.bookingEngine;
            }

            if (typeof supplierRequest.extras !== 'undefined') {
                forEach(supplierRequest.extras, (extra: IDynamicExtrasRequest) => {
                    // @ts-ignore
                    params[`extras[${extra.id}]`] = extra.quantity;
                });
            }

            if (typeof supplierRequest.badgeId !== 'undefined') {
                params['badge-id'] = supplierRequest.badgeId;
            }

            if (typeof supplierRequest.currency !== 'undefined') {
                params.currency = supplierRequest.currency;
            }

            const config: AxiosRequestConfig = {
                params
            };

            if (typeof callback !== 'undefined') {
                config.cancelToken = new Axios.CancelToken((cancel: Canceler): void => {
                    callback(cancel);
                });
            }

            return this.http.get(
                `suppliers/${code}/vehicle-rates/${sippCode}`,
                config
            );
        }
}

export default SupplierApi;
