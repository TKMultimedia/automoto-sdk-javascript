import ISupplier from '../Model/ISupplier';
import IDriver from '../Model/IDriver';
import IVehicle from '../Model/IVehicle';
import IPriceSummary from '../Model/IPriceSummary';
import IDepot from '../Model/IDepot';
import { PaymentAccount, PaymentMethod } from '../Enum/Payment';
import IProduct from '../Model/IProduct';
import IDebuggableRequest from './IDebuggableRequest';

export default interface IBookingRequest extends IDebuggableRequest {
    rateId?: string;
    supplier: ISupplier;
    driver: IDriver;
    vehicle: IVehicle;
    priceSummary: IPriceSummary;
    pickupDepot: IDepot;
    returnDepot: IDepot;
    pickupTime: string;
    returnTime: string;
    paymentAccount: PaymentAccount;
    paymentMethod: PaymentMethod;
    paymentPublicKey: string;
    paymentToken: string;
    flightNumber: string;
    loyaltyNumber?: string;
    loyaltyCode?: string;
    sms: boolean;
    newsletter: boolean;
    test: boolean;
    clientId: string;
    debug: boolean;
    debugTag: string;
    bookingEngine: string;
    additionalProducts: IProduct[];
    behaviours?: string[];
    badgeId?: number;
}
