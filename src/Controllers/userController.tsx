import { nanoid } from "@reduxjs/toolkit";
import User from "../Models/reporterFactory";
import RegisterUser from "../Models/registerUserFactory"

const RegisteredUser1 = new RegisterUser({
    _userId: nanoid(5),
    userName: "dre",
    password: "password",
})
const RegiserUser3 = ({
    _userId: nanoid(),
    userName: "dessy7",
    password: "password",
})

const RegisterUser4 = ({
    _userId: nanoid(),
    userName: "iybk",
    password: "password",
})


const RegisterUser2 = new RegisterUser({
    _userId: nanoid(),
    userName: "desmond",
    password: "password",
})


const users = [
    new User({
        firstName: "Dr3",
        lastName: "Papa",
        registerUser: RegisteredUser1,
        email: "dr3@yahoo.com",
    }),

    new User({
        firstName: "Desmond",
        lastName: "Oloye",
        registerUser: RegisterUser2,
        email: "dessy@yaho.com",

    }),

    new User({
        firstName: "Dessy",
        lastName: "Brat",
        registerUser: RegiserUser3,
        email: "brat@yahoo.com",

    }),
    new User({
        firstName: "Iyanu",
        lastName: "Escobar",
        registerUser: RegisterUser4,
        email: "esco@yahoo.com",

    })
]


export default function getUsser() {

    // const randomIndex = Math.floor(Math.random() * 4 ) + 1;

    return users.sort()


}
