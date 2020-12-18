import { makeAutoObservable } from "mobx";
import { PeopleListViewModel } from "./PeopleListViewModel";
import { PersonEditorViewModel } from "./PersonEditorViewModel";

export class PeopleViewModel {
  constructor(
    readonly list: PeopleListViewModel,
    readonly editor: PersonEditorViewModel
  ) {
    makeAutoObservable(this, undefined, { autoBind: true });
  }
}
