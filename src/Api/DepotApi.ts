import AbstractApi from './AbstractApi';
import Axios, { AxiosPromise, AxiosRequestConfig, Canceler } from 'axios';
import IDepotRequest from '../RequestModel/IDepotRequest';
import IDepotPairResponse from '../ResponseModel/IDepotPairResponse';
import IDepot from '../Model/IDepot';
// @ts-ignore Fork @types to include this library
import * as kebabCase from 'kebabcase-keys';
import ITimezoneResponse from '../ResponseModel/ITimezoneResponse';
import { cancelerCallback } from '../Types/CancellerCallback';

/**
 * @since v2.0.0
 */
class DepotApi extends AbstractApi {

    public getPickupReturnDepots(depotRequest: IDepotRequest, callback?: cancelerCallback): AxiosPromise<IDepotPairResponse[]> {

        const config: AxiosRequestConfig = {
            params: kebabCase(depotRequest, {deep: true})
        };

        if (typeof callback !== 'undefined') {
            config.cancelToken = new Axios.CancelToken((cancel: Canceler): void => {
                callback(cancel);
            });
        }

        return this.http.get(
            'pickup-return-depots',
            config
        );
    }

    public getDepots(depotRequest: IDepotRequest): AxiosPromise<IDepot[]> {
        return this.http.get(
            'depots',
            {
                params: kebabCase(depotRequest)
            }
        );
    }

    public getDepot(depotId: number, bookingEngine: string): AxiosPromise<IDepot> {
        return this.http.get(`depots/${depotId}?booking-engine=${bookingEngine}`);
    }

    public getTimezoneByCoordinates(latitude: number, longitude: number): AxiosPromise<ITimezoneResponse> {
        return this.http.get(`timezones/${latitude}/${longitude}`);
    }
}

export default DepotApi;
