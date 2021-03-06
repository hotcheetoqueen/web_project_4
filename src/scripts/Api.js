export default class Api {
    constructor({ server, headers }) {
        this.server = server;
        this.headers = headers;
    }

    getCardList() {
        return fetch(`${this.server}/cards`, {
            headers: this.headers,
        }).then(res => res.ok ? res.json() : Promise.reject('Error: ' + res.status))
        .catch(console.log);
    }

    getUserInfo() {
        return fetch(`${this.server}/users/me/`, {
            headers: this.headers,
        }) .then(res => res.ok ? res.json() : Promise.reject('Error: ' + res.status))
        .catch(console.log);
    }

    getAppInfo() {
        return Promise.all([this.getCardList(), this.getUserInfo()]);
    }

    addCard({ name, link }) {
        return fetch(`${this.server}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name,
                link,
            }),
        }) .then(res => res.ok ? res.json() : Promise.reject('Error: ' + res.status))
        .catch(console.log('Problem fetching addCard API results'));
    }

    toggleLike(cardId, isLiked) {
        const method = isLiked ? 'DELETE' : 'PUT';
        return fetch(`${this.server}/cards/likes/${cardId}/`, {
            method: method,
            headers: this.headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
    }

    deleteCard(cardId) {
        return fetch(this.server + `/cards/${cardId}/`, {
            method: 'DELETE',
            headers: this.headers,
        }).then(res => res.ok ? res.json() : Promise.reject('Error: ' + res.status))
    }

    updateUserInfo({ name, job }) {
        return fetch(`${this.server}/users/me/`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: job,
            }),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).catch(console.log);
    }

    setUserAvatar({ avatar }) {
        return fetch(this.server + '/users/me/avatar/', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: avatar,
            }),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        });
    }
}