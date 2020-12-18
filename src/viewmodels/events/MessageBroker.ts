import { Subject } from "rxjs";
import { Message } from "./Message";

export class MessageBroker {
  private readonly _messages$ = new Subject<Message>();

  emit(message: Message) {
    this._messages$.next(message);
  }

  subscribe(handler: (message: Message) => void) {
    return this._messages$.subscribe(handler);
  }
}
