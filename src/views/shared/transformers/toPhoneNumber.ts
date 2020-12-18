import { PhoneModel } from "models";

export function toPhoneNumber(number: string): PhoneModel {
  return new PhoneModel(number);
}
