export default interface IGarageWorkingTime {
  id: number;
  date_of_week: number;
  time_from: string;
  time_to: string;
  is_all_day: number;
  garage_id: number;
}
