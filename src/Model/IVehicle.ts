import IVehicleExtra from './IVehicleExtra';

enum Transmission {
    AUTOMATIC = 'automatic',
    MANUAL = 'manual'
}

export default interface IVehicle {
    sippCode: string;
    extras: IVehicleExtra[];
}

export {
    Transmission
};
