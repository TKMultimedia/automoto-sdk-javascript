import { SortDepot } from '../Enum/Sort';
import Location from '../Enum/Location';
import IDebuggableRequest from './IDebuggableRequest';

export default interface IDepotRequest extends IDebuggableRequest {
    pickupCoordinate: string;
    returnCoordinate: string;
    sort?: SortDepot;
    radius?: number;
    pickupLocationTypes?: Location[];
    returnLocationTypes?: Location[];
}
