
export class Customer{
    name:string;
    address:any;
    accountBalance:number;

    constructor(name:string, address?:any, accountBalance?:number){
      this.name = name;
      this.address = address;
      this.accountBalance = accountBalance;  
    }

    getName():string{
        return this.name;
    }
}


