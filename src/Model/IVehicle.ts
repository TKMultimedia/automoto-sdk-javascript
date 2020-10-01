export default interface IVehicle {
  id?: number;
  license_plate: string;
  image_vehicle: string;
  brand: string;
  model: string;
  version: string;
  type_vehicle: string;
  power: string;
  fuel: string;
  gearbox: string;
  number_door: string;
  serial_number: string;
  manufacture_year: number;
  environment_pelle: number;
  assurance_assistance: string;
  contact_assistance: string;
  contract_number_assistance: string;
  phone_assistance: string;
  brand_assistance: string;
  brand_contract: string;
  brand_phone: string;
  is_new: number;
  last_vehicle_inspection: string;
  category_vehicle_id: number;
}
