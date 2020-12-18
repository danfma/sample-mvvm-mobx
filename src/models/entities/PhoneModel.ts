import { makeAutoObservable } from "mobx";

export class PhoneModel {
  constructor(
    readonly number: string,
    readonly extension?: string
  ) {
    makeAutoObservable(this);
  }

  get valid(): boolean {
    return /\d{9}/.test(this.number);
  }

  toString(): string {
    if (this.extension) {
      return `${this.number} (${this.extension})`;
    }

    return this.number;
  }
}
