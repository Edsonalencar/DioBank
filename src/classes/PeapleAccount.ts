import { DIOAccount } from "./DIOAccount";

export class PeapleAccount extends DIOAccount {
  doc_id: number;

  constructor(doc_id: number, name: string, acountNumber: number) {
    super(name, acountNumber);
    this.doc_id = doc_id;
  }

  getDocId() {
    return this.doc_id;
  }
}
