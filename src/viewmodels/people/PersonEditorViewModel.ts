import { makeAutoObservable } from "mobx";
import { PeopleService, PersonModel, PhoneModel } from "models";
import { MessageBroker, PersonSaved } from "../events";

export class PersonEditorViewModel {
  isEditing = false;
  person = new PersonModel();

  constructor(
    private readonly service: PeopleService,
    private readonly messageBroker: MessageBroker) {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  get isNew() {
    return !this.person.id;
  }

  setName(value: string) {
    this.person.setName(value);
  }

  setSurname(value: string) {
    this.person.setSurname(value);
  }

  setPhone(phone: PhoneModel) {
    this.person.setPhone(phone);
  }

  beginNew() {
    this.person = new PersonModel();
    this.isEditing = true;
  }

  beginEdit(person: PersonModel) {
    this.person = person;
    this.isEditing = true;
  }

  async save() {
    try {
      await this.service.save(this.person);
      this.messageBroker.emit(new PersonSaved(this.person));
      this.cancel();
    } catch (e) {
      // show errors
    }
  }

  cancel() {
    this.isEditing = false;
    this.person = new PersonModel();
  }
}
