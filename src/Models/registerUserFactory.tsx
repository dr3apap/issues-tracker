import { nanoid } from "@reduxjs/toolkit";

export default class RegisterUser {
    _userId?: string;
    userName!: string;
    password!: string;

    constructor({ userName, password }: RegisterUser, id = nanoid(5)) {
        this._userId = id;
        this.userName = userName;
        this.password = password;
    }
}

