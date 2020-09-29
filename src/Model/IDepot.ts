import ISupplier from './ISupplier';

interface ISchedule {
    open: string;
    close: string;
}

export default interface IDepot {
    id: number;
    name: string;
    code: string;
    locationType: string;
    phone: string;
    address: string;
    city: string;
    postcode?: string;
    state: {
        code: string;
        name: string;
    };
    country: {
        code: string;
        name: string;
    };
    coordinate: {
        latitude: number;
        longitude: number;
    };
    timezone: string;
    distance: number;
    distanceUnit: string;
    requireFlightNumber: boolean;
    extra_allowed: boolean;
    specialInstruction: string;
    supplier: ISupplier;
    depotSchedule: {
        sunday: ISchedule;
        monday: ISchedule;
        tuesday: ISchedule;
        wednesday: ISchedule;
        thursday: ISchedule;
        friday: ISchedule;
        saturday: ISchedule;
    };
}

export interface IDepotCompact {
    id: number;
    name: string;
    code: string;
    locationType: string;
    coordinate: {
        latitude: number;
        longitude: number;
    };
    distance: number;
    address?: string;
}
