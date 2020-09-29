export default interface IPriceSummary {
    currency: string;
    total: number;
    perDay: number;
    discounted: boolean;
    timeAndKilometre: number;
    commissionAmount: number;
    excessAmount: number;
    payLater?: number; // Only available if partial prepaid
    payNow?: number; // When requesting payment. e.g: booking page
    paid?: number; // When paid. e.g: confirmation page.
}
