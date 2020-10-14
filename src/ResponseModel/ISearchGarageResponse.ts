import IGarage from '../Model/IGarage';

export default interface ISearchGarageResponse {
  count: number;
  rows: IGarage[];
}
