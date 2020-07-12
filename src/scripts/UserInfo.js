export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._name.textContent = document.querySelector(nameSelector);
        this._job.textContent = document.querySelector(jobSelector);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
        };
    }

    setUserInfo() {
        name.textContent = values.name;
        job.textContent = values.job;
    }
}