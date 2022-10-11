export abstract class DIOAccount {
  private name: string;
  private readonly acountNumber: number;
  balance = 0;
  private status: boolean = true;

  constructor(name: string, acountNumber: number) {
    this.name = name;
    this.acountNumber = acountNumber;
  }

  // Seters
  setName(name: string) {
    if (name != "") {
      this.name = name;
      console.log("Nome alterado com sucesso");
    }
  }
  setStatus(status: boolean) {
    this.status = status;
  }

  // Geters
  getName() {
    return this.name;
  }
  getBalance() {
    return this.balance;
  }
  
  // Metods
  deposit(deposit: number) {
    if (this.validateStatus()) {
      this.balance += deposit;
      console.log("Deposito realizado com sucesso");
    }
  }
  withDrawn(drawn: number) {
    if (this.validateStatus() && this.balance > drawn) {
      this.balance -= drawn;
      console.log("Saque realizado com sucesso");
    } else console.log("Ocorreu um erro durante o saque");
  }

  private validateStatus() {
    if (this.status) return this.status;
  }
}
