export default interface ICheckAppointmentRequest {
  date_schedule: number;
  time_from: string;
  time_to: string;
  garage_id: number;
  license_plate: string;
  service_ids: number[];
}
