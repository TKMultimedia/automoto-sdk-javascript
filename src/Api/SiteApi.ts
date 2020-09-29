import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IMySiteResponse from '../ResponseModel/IMySiteResponse';

export default class SiteApi extends AbstractApi {

    public getMySite(): AxiosPromise<IMySiteResponse> {
        return this.http.get('my-sites');
    }
}
