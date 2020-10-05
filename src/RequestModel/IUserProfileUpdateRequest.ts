import IAddress from '../Model/IAddress';
import IUserProfileResponse from '../ResponseModel/IUserProfileResponse';

export interface IUserProfileUpdateRequest extends IUserProfileResponse {
  address?: IAddress;
};
