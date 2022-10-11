import { PeapleAccount } from "./classes/PeapleAccount";
import { CompanyAccount } from "./classes/CompanyAccount";

const NewCompanyAcount = new CompanyAccount("GoDev", 15896);
const NewPeapleAccount = new PeapleAccount(13, "Edson Alencar", 13852);

console.log({
  NewCompanyAcount,
  NewPeapleAccount,
});
