export default interface IPendingProductPaymentRequest {
    payment_account: string;
    payment_token: string;
    total: number;
}
