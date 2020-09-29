import IDebuggableResponse from './IDebuggableResponse';

/**
 * Generic error response from UBE v2.0
 */
export default interface IErrorResponse extends IDebuggableResponse {
    message: string;
}
