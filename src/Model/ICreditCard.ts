export default interface ICreditCard {
  id?: number;
  card_name: string;
  card_number: string;
  expiration_date: string;
  cvc: number;
  user_id?: number;
}
