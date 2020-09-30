import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IUserProfileResponse from '../ResponseModel/IUserProfileResponse';
import { IUserProfileUpdateRequest } from '../RequestModel/IUserProfileUpdateRequest';
import { IGeneralResponse } from '../ResponseModel/IErrorResponse';

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

  public updateUserProfile(profileData: IUserProfileUpdateRequest): AxiosPromise<IGeneralResponse> {
    return this.http.put('user', profileData);
  }
}

export default UserApi;
