import { makeAutoObservable } from "mobx";
import { PeopleViewModel } from "./people";

export class AppViewModel {
  constructor(readonly people: PeopleViewModel) {
    makeAutoObservable(this);
  }
}
