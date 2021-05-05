import ICreditCard from '../Model/ICreditCard';

export default interface IPaidServiceRequestParams {
  fee_vehicle_id: number;
  card?: ICreditCard;
  card_id?: number;
}
