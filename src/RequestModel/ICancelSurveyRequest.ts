import IDebuggableRequest from './IDebuggableRequest';

export default interface ICancelSurveyRequest extends IDebuggableRequest {
    encryptedId: string;
    cancelOptionId: number;
    feedback?: string;
}
