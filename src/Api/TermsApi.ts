import AbstractApi from './AbstractApi';
import Axios, { AxiosPromise, Canceler } from 'axios';
import { cancelerCallback } from '../Types/CancellerCallback';

class TermsApi extends AbstractApi {
    public getTerms(endpoint: string, callback: cancelerCallback): AxiosPromise {
        return this.http.get(`terms/${endpoint}`, {
            cancelToken: new Axios.CancelToken((cancel: Canceler): void => {
                callback(cancel);
            }),
            transformResponse: (res: string): string => res
        });
    }
}

export default TermsApi;
