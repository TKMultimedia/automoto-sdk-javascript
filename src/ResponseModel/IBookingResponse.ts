import IRefundOption from '../Model/IRefundOption';
import { PaymentAccount, PaymentMethod } from '../Enum/Payment';
import BookingStatus from '../Enum/BookingStatus';
import IDriver from '../Model/IDriver';
import { Transmission } from '../Model/IVehicle';
import IDepot from '../Model/IDepot';
import IPriceSummary from '../Model/IPriceSummary';
import ISupplier from '../Model/ISupplier';
import IPriceBreakdown from '../Model/IPriceBreakdown';
import IDebug from '../Model/IDebug';
import IProduct from '../Model/IProduct';
import IDebuggableResponse from './IDebuggableResponse';
import IPaymentTransaction from '../Model/IPaymentTransaction';
import IAdvertise from '../Model/IAdvertise';
import IPendingProduct from '../Model/IPendingProduct';

export default interface IBookingResponse extends IDebuggableResponse {
    id: number;
    encryptedId: string;
    confirmationNumber: string;
    refundRules: string[];
    refundOptions: IRefundOption[];
    matrixId: number;
    hiccupPolicy?: string;
    rateId?: string;
    paymentAccount: PaymentAccount;
    paymentMethod: PaymentMethod;
    paymentPublicKey: string;
    pickupTime: string;
    returnTime: string;
    bookingTime: string;
    flightNumber?: string;
    loyaltyNumber?: string;
    status: BookingStatus;
    driver: IDriver;
    vehicle: {
        name: string;
        image: string;
        sippCode: string;
        feature: {
            category: string;
            type: string;
            seat: number;
            door: number;
            hasAirCondition: boolean;
            transmission: Transmission;
            luggageSmall: number;
            luggageLarge: number;
            drive: string;
            fuel: string;
        };
        mileage: {
            unlimited: boolean;
            limit: number;
            unit: string;
            period: string;
            charge: number;
            currency: string;
        };
        // TODO: should be "extras", we will need to update in next API Release :stare:
        extra: Array<{
            id: number;
            code: string;
            name: string;
            description: string;
            dailyPrice: number;
            maxRentalPrice: number;
            quantity: number;
            status: string;
            dynamic: boolean;
        }>;
    };
    pickupDepot: IDepot;
    returnDepot: IDepot;
    priceSummary: IPriceSummary;
    priceBreakdowns: IPriceBreakdown[];
    supplier: ISupplier;
    debugInfo: IDebug;
    additionalProducts: IProduct[];
    lastPaymentTransaction?: IPaymentTransaction;
    advertise?: IAdvertise;
    pendingProducts?: IPendingProduct[];
    bookingEngine: string;
    securityDeposit?: string;
    pendingAmount?: number;
    engineReferenceId?: string;
    underageMessage?: string;
}
