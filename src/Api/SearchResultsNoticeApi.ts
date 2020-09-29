import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { ISearchResultsNoticeResponse } from '../ResponseModel/ISearchResultsNoticeResponse';
import { IGetSearchResulsNoticeParam } from '../Types/GetSearchResulsNoticeParam';

export default class SearchResultsNoticeApi extends AbstractApi {

    public getSearchResultsNotice(params: IGetSearchResulsNoticeParam): AxiosPromise<ISearchResultsNoticeResponse[]> {
        return this.http.get(`notices?country-code=${params.countryCode}&start-date=${params.pickupTime}&end-date=${params.returnTime}`);
    }
}
