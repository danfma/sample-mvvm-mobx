import { PersonModel } from "models";

export class PersonSaved {
  constructor(readonly person: PersonModel) {
  }
}

export class PersonDeleted {
  constructor(readonly person: PersonModel) {
  }
}

export type Message =
  PersonSaved | PersonDeleted;
