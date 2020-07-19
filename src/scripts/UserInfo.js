import { userName, userJob } from './utils.js';

export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._name.textContent = document.querySelector(nameSelector);
        this._job.textContent = document.querySelector(jobSelector); 
}

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._job.textContent,
        };
    }

    setUserInfo() {
        name.textContent = name; 
        job.textContent = about; 
    }
}