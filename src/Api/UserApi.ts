import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IUserProfileResponse from '../ResponseModel/IUserProfileResponse';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */
class UserApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getUserProfile(): AxiosPromise<IUserProfileResponse> {
    return this.http.get('user');
  }
}

export default UserApi;
