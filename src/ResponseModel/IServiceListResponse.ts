import IService from '../Model/IService';

export default interface IServiceListResponse {
  count: number;
  rows: IService[];
}
