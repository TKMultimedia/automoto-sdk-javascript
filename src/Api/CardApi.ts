import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import ICreditCard from '../Model/ICreditCard';
import { IGeneralResponse } from '../ResponseModel/IErrorResponse';
import ICardListResponse from '../ResponseModel/ICardListResponse';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */
class CardApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public createCard(card: ICreditCard): AxiosPromise<IGeneralResponse> {
    return this.http.post('card', card);
  }

  public getListCard(page: number, limit: number): AxiosPromise<ICardListResponse> {
    return this.http.get('card', {
      params: {
        page,
        limit
      }
    });
  }

  public getCardById(id: number): AxiosPromise<ICreditCard> {
    return this.http.get(`/card/${id}`);
  }

  public deleteCard(id: number): AxiosPromise<IGeneralResponse> {
    return this.http.delete(`/card/${id}`);
  }
}

export default CardApi;
