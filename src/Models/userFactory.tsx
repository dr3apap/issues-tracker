import { nanoid } from "@reduxjs/toolkit";

export default class User {
    _userId!: string;
    userName!: string;
    firstName!: string;
    lastName!: string;
    password!: string;

    constructor(obj: User) {
        this._userId = nanoid(5);
        this.userName = obj.userName;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.password = obj.password;
    }
}

