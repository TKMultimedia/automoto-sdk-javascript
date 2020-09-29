export default interface IExtras {
  id: number;
  code: string;
  name: string;
  description: string;
  dailyPrice: number;
  actualDailyPrice: number;
  displayDailyPrice: number;
  maxRentalPrice: number;
  actualMaxRentalPrice: number;
  displayMaxRentalPrice: number;
  totalPrice?: number;
  actualTotalPrice?: number;
  displayTotalPrice?: number;
  maxQty: number;
  dynamic: boolean;
}
