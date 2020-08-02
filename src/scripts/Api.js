export default class Api {
    constructor({ server, headers }) {
        this.server = server;
        this.headers = headers;
    }

    getCardList() {
        return fetch(this.server + '/cards/', {
            method: 'GET',
            headers: this.headers,
        }) .then(res => res.ok ? res.json() : Promise.reject('Error: ' + res.status))
        .catch(console.log('Problem fetching API results'));
    }

    getUserInfo() {
        return fetch(this.server + '/users/me/', {
            headers: this.headers,
        }) .then(res => res.ok ? res.json() : Promise.reject('Error: ' + res.status))
        .catch(console.log('Problem fetching API results'));
    }

    getAppInfo() {
        return Promise.all([this.getCardList(), this.getUserInfo()]);
    }

    addCard({ name, link }) {
        return fetch(this.server + '/cards/', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link,
            }),
        }) .then(res => res.ok ? res.json() : Promise.reject('Error: ' + res.status))
        .catch(console.log('Problem fetching API results'));
    }

    toggleLike(id, like) {
        const method = isLiked ? 'DELETE' : 'PUT';
        return fetch(this.server + `/cards/likes/${cardID}`, {
            method: method,
            headers: this.headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
    }

    deleteCard(cardId) {
        return fetch(this.server + `/cards/${cardID}`, {
            method: 'DELETE',
            headers: this.headers,
        });
    }

    setUserInfo({ name, about }) {
        return fetch(this.server + '/users/me/', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: job,
            }),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        });
    }

    setUserAvatar({ avatar }) {
        return fetch(this.server + '/users/me/avatar/', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: link,
            }),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        });
    }
}