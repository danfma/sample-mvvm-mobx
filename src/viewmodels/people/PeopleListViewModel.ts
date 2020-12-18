import { makeAutoObservable } from "mobx";
import type { PeopleService, PersonModel } from "models";
import { Message, MessageBroker, PersonSaved } from "../events";

export class PeopleListViewModel {
  people: PersonModel[] = [];

  constructor(
    private readonly service: PeopleService,
    private readonly messageBroker: MessageBroker) {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  attach() {
    const subscription = this.messageBroker.subscribe(this.handleMessage);

    this.loadPeople();

    return () => {
      subscription.unsubscribe();
    };
  }

  private setPeople(people: PersonModel[]) {
    this.people = people;
  }

  private handleMessage(message: Message) {
    if (message instanceof PersonSaved) {
      this.loadPeople();
    }
  }

  private async loadPeople() {
    this.setPeople(await this.service.loadAll());
  }
}
