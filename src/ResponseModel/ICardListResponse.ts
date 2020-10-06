import ICreditCard from '../Model/ICreditCard';

export default interface ICardListResponse {
  count: number;
  rows: ICreditCard[];
}
