import User from "../models/User";


export default class UserController{

    constructor() {
    }

    public retrieveUser(): User{
        return new User("Alex","Cailliaud");
    }

    public createUser(user :  User): boolean{
        return false;
    }

}