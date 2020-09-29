import IDepot from '../Model/IDepot';
import IDebuggableResponse from './IDebuggableResponse';

export default interface IDepotPairResponse extends IDebuggableResponse {
    pickup: IDepot;
    return: IDepot;
}
