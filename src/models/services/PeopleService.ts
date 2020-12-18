import { PersonModel } from "../entities";

export interface PeopleService {
  save(person: PersonModel): Promise<void>;
  loadAll(): Promise<PersonModel[]>;
}
