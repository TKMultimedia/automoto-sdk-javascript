import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IPromotion from '../Model/IPromotion';

/**
 * @since v2.0.0
 */
class Promotion extends AbstractApi {
    public getPromotion(countryCode: string): AxiosPromise<IPromotion[]> {
        return this.http.get(
            `dynamic-promotions`,
            {
                params: {
                    'country-code': countryCode,
                }
            }
        );
    }
}

export default Promotion;
