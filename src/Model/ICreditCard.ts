export default interface ICreditCard {
  id?: number;
  card_name: string;
  card_number: string;
  expiration_date: string;
  cvc: string;
  user_id?: number;
}
