export default class UserInfo {
    constructor({ name, job }) {
        this._name.textContent = document.querySelector(name);
        this._job.textContent = document.querySelector(job);
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