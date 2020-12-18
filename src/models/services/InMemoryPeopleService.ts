import { PersonModel } from "../entities";
import { PeopleService } from "./PeopleService";

export class InMemoryPeopleService implements PeopleService {
  private people: PersonModel[] = [
    new PersonModel().with({
      name: "Daniel",
      surname: "Alves"
    }),
    new PersonModel().with({
      name: "Fulanito",
      surname: "Silva"
    })
  ];

  async save(person: PersonModel) {
    this.people.push(person);
  }

  async loadAll() {
    return this.people;
  }
}
