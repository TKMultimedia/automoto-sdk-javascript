import { PaymentAccount, PaymentMethod } from '../Enum/Payment';
import IPriceSummary from '../Model/IPriceSummary';
import IPriceBreakdown from '../Model/IPriceBreakdown';
import IFeature from '../Model/IFeature';
import IMileage from '../Model/IMileage';
import IExtras from '../Model/IExtras';
import IBadge from '../Model/IBadge';
import ISupplier from '../Model/ISupplier';
import IDebuggableResponse from './IDebuggableResponse';
import IProduct from '../Model/IProduct';
import { IDepotCompact } from '../Model/IDepot';

export default interface IVehicleRateResponse extends IDebuggableResponse {
  name: string;
  image: string;
  rateId: string;
  sippCode: string;
  paymentAccount: PaymentAccount;
  paymentMethod: PaymentMethod;
  paymentPublicKey: string;
  priceSummary: IPriceSummary;
  actualPriceSummary: IPriceSummary;
  displayPriceSummary: IPriceSummary;
  priceBreakdowns: IPriceBreakdown[];
  actualPriceBreakdowns: IPriceBreakdown[];
  displayPriceBreakdowns: IPriceBreakdown[];
  actualCurrency: string;
  displayCurrency: string;
  feature: IFeature;
  mileage: IMileage;
  extras: IExtras[];
  badge: IBadge;
  supplier: ISupplier;
  additionalProducts: IProduct[];
  pickupDepot: IDepotCompact;
  returnDepot: IDepotCompact;
  bookingEngine?: string;
}
