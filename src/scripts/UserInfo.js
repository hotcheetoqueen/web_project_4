export default class UserInfo {
    constructor({ name, job, avatar }) {
        this._name = name;
        this._job = job;
        this._avatar = avatar;
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
            avatar: this._avatar.src,
            _id: this._id,
        };
    }

    setUserInfo(inputValues) {
        this._name.textContent = inputValues.name;
        this._job.textContent = inputValues.about;
        this._avatar.src = inputValues.avatar;
        this._id = inputValues._id;
    }
}