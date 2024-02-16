import { nanoid } from "@reduxjs/toolkit";
import User from "../Models/userFactory";

const users = [
    new User({
        _userId: nanoid(),
        userName: "dre",
        firstName: "Dr3",
        lastName: "Papa",
        password: "password",

    }),


    new User({
        _userId: nanoid(),
        userName: "desmond",
        firstName: "Desmond",
        lastName: "Oloye",
        password: "password",

    }),


    new User({
        _userId: nanoid(),
        userName: "dessy7",
        firstName: "Dessy",
        lastName: "Brat",
        password: "password",

    }),


    new User({
        _userId: nanoid(),
        userName: "iybk",
        firstName: "Iyanu",
        lastName: "Escobar",
        password: "password",

    })
]


export default function getUsser() {

    // const randomIndex = Math.floor(Math.random() * 4 ) + 1;

    return users.sort()


}
