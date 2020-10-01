import IEmployee from '../Model/IEmployee';

export default interface IGetEmloyeeListResponse {
  count: number;
  rows: IEmployee[];
}
