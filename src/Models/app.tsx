import { nanoid } from '@reduxjs/toolkit';

class Application {
    _id!: string;
    appName!: string;
    version!: string;
    repolink!: string;
    constructor({ appName, version, repolink }: Application, id = nanoid(5)) {
        this._id = id;
        this.appName = appName;
        this.version = version;
        this.repolink = repolink;
    }

}
export default Application;
