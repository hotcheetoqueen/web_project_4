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

    setUserInfo() {
        userName.textContent = this._name; 
        userJob.textContent = this._job; 
    }
}