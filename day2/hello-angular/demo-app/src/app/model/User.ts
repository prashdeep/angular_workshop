export class User {
    
    constructor(
        
        private _name:string, 
        private _username:string, 
        private _email:string,
        private _id?:number, ){

    }

    get id(){
        return this.id;
    }

    get name (){
        return this.name;
    }
    get username(){
        return this.username;
    }

    get email(){
        return this.email;
    }
}