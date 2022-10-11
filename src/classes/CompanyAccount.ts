import { DIOAccount } from "./DIOAccount";

export class CompanyAccount extends DIOAccount {
  constructor(name: string, acountNumber: number) {
    super(name, acountNumber);
  }

  getLoan(loan: number) {
    this.deposit(loan);
  }
}
