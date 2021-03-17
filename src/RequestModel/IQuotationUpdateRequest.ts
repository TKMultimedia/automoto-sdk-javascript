import QuotationStatus from '../Enum/QuotationStatus';

export default interface IQuotationUpdateRequest {
  id?: number;
  quotation_id?: number;
  status?: QuotationStatus;
  comments?: string;
  content_refuse?: string;
  content?: string;
}
