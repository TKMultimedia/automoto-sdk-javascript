import ICheckAppointmentRequest from './ICheckAppointmentRequest';

export interface ICreateAppointmentRequest extends ICheckAppointmentRequest {
  name: string;
  email: string;
  phone: string;
  description: string;
}
