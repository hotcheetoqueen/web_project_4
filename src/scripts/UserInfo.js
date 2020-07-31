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
        this._name.textContent = inputValues['user-name'];
        this._job.textContent = inputValues['user-about'];
    }
}