export default interface IPromotion {
    type: string;
    badgeId: number;
    discountCode?: string;
    supplierCode: string;
    restrictedSipps: string[];
    title: string;
    description: string;
    secondCall: boolean;
}
