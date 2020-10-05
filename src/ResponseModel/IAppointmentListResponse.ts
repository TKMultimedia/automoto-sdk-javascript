import IAppointment from '../Model/IAppointment';

export default interface IAppointmentListResponse {
  count: number;
  rows: IAppointment[];
}
