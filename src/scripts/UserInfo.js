import { userName, userJob } from './utils.js';

export default class UserInfo {
    constructor({ name, job }) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job); 
}

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._job.textContent,
        };
    }

    setUserInfo() {
        this._name.textContent = name; 
        this._job.textContent = about; 
    }
}