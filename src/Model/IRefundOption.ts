export default interface IRefundOption {
    type: string;
    expired: boolean;
    amount: number;
    expireDate: string;
    current: boolean;
}
