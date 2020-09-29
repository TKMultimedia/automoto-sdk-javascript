import IDebuggableResponse from './IDebuggableResponse';

export default interface ISupplierTermResponse extends IDebuggableResponse {
  url: string;
  terms: Array<{
    title: string;
    description: string;
  }>;
}
