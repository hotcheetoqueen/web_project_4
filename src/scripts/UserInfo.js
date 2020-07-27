import { userName, userJob } from './utils.js';

export default class UserInfo {
    constructor({ name, job }) {
        this._name = name;
        this._job = job; 
}

    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
        };
    }

    setUserInfo(inputValues) {
        this._name = inputValues.newName;
        this._job = inputValues.newJob;
    }
}