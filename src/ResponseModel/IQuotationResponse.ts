import IQuotation from "../Model/IQuotation";

export default interface IQuotationResponse {
  count: number;
  rows: IQuotation[];
}
