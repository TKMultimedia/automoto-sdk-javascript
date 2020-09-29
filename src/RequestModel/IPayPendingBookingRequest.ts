export default interface IPayPendingBookingRequest {
    payment_account: string;
    payment_token: string;
    total: number;
}
