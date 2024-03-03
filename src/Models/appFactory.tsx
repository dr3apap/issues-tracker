import { nanoid } from "@reduxjs/toolkit";

class Application {
    _id?: string;
    appName!: string;
    appVersion!: string;
    repolink?: string;
    constructor({ appName, appVersion }: Application, _id = nanoid(5), repolink = "") {
        this._id = _id;
        this.appName = appName;
        this.appVersion = appVersion;
        this.repolink = repolink;
    }
}

export default Application

