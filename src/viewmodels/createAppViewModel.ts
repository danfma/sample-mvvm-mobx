import { InMemoryPeopleService, PeopleService } from "models";
import { AppViewModel } from "./AppViewModel";
import { PeopleListViewModel, PeopleViewModel, PersonEditorViewModel } from "./people";
import { MessageBroker } from "./events";

export function createAppViewModel(): AppViewModel {
  // MODELS
  const peopleService: PeopleService = new InMemoryPeopleService();

  // VIEW MODELS
  const messageBroker = new MessageBroker();

  const personEditor = new PersonEditorViewModel(peopleService, messageBroker);
  const peopleList = new PeopleListViewModel(peopleService, messageBroker);
  const people = new PeopleViewModel(peopleList, personEditor);

  return new AppViewModel(people);
}
