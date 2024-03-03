import { nanoid } from '@reduxjs/toolkit'
import RegisterUser from './registerUserFactory'
export default class User {
    _id?: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    registerUser?: RegisterUser;

    constructor({ firstName, lastName, email, registerUser }: User, id = nanoid(5)) {
        this._id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.registerUser = registerUser;
    }

}





