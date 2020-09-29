import IPriceSummary from '../Model/IPriceSummary';
import IPriceBreakdown from '../Model/IPriceBreakdown';
import IFeature from '../Model/IFeature';
import IMileage from '../Model/IMileage';
import IExtras from '../Model/IExtras';
import ISupplier from '../Model/ISupplier';
import IDebuggableResponse from './IDebuggableResponse';
import IProduct from '../Model/IProduct';
import { PaymentAccount, PaymentMethod } from '../Enum/Payment';
import IRefundOption from '../Model/IRefundOption';

export default interface ISupplierVehicleRateResponse extends IDebuggableResponse {
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
  feature: IFeature;
  mileage: IMileage;
  extras: IExtras[];
  badge: {
    title: string;
    description: string;
  };
  supplier: ISupplier;
  additionalProducts: IProduct[];
  refundOptions: IRefundOption[];
  securityDeposit?: string;
  underageMessage?: string;
}
