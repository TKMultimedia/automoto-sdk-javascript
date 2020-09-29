import AbstractApi from './AbstractApi';
import Axios, { AxiosPromise, Canceler } from 'axios';

type cancelerCallback = (cancel: Canceler) => void;

class PrivacyApi extends AbstractApi {
    public getPrivacyPolicy(brand: string, callback: cancelerCallback): AxiosPromise {
        return this.http.get(`privacy-policy/${brand}`, {
            cancelToken: new Axios.CancelToken((cancel: Canceler): void => {
                callback(cancel);
            }),
            transformResponse: (res: string): string => res
        });
    }
}

export default PrivacyApi;
