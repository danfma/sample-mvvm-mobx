import { PhoneModel } from "./PhoneModel";
import { makeAutoObservable } from "mobx";

export class PersonModel {
  id?: string;
  name = "";
  surname = "";
  phone = new PhoneModel("");

  constructor() {
    makeAutoObservable(this);
  }

  setName(value: string) {
    if (this.canModify()) {
      this.name = value;
    }
  }

  setSurname(value: string) {
    if (this.canModify()) {
      this.surname = value;
    }
  }

  setPhone(phone: PhoneModel) {
    this.phone = phone;
  }

  with(data: Partial<PersonModel>): this {
    const {
      id = this.id,
      name = this.name,
      surname = this.surname,
      phone = this.phone
    } = data;

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;

    return this;
  }

  private canModify() {
    return !this.id;
  }
}
