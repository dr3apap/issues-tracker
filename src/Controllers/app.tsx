import { nanoid } from "@reduxjs/toolkit";
import App from "../Models/appFactory";


const app1 = { _id: nanoid(), appName: "isue-tracker", appVersion: "V-2.0", repolink: "https://github.com/dr3apap/issue-tracker" };


const app2 = { _id: nanoid(), appName: "uptime-check", appVersion: "V-1.11", repolink: "https://github.com/dr3apap/uptime-checker" };

const app3 = { _id: nanoid(), appName: "game-hub", appVersion: "V-1.8", repolink: "https://github.com/dr3apap/issue-tracker" };

export default function makeApp() {
    const apps: App[] = [];
    apps.push(new App(app1))
    apps.push(new App(app2))
    apps.push(new App(app3))
    return apps;
}

