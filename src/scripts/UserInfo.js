import { userName, userJob } from './utils.js';

export default class UserInfo {
    constructor({ name, job }) {
        this._name = name;
        this._job = job; 
}

    getUserInfo() {
        return {
            name: this._name,
            job: this._job,
        };
    }

    setUserInfo({ newName, newJob }) {
        this._name = newName;
        this._job = newJob;
        // userName.textContent = name; 
        // userJob.textContent = job; 
    }
}