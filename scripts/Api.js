export default class Api {
  // constructor(){}

  _checkResponse(res) {
    return res ? res.json() : Promise.reject(`Error: ${res.status}`)
  }

  getData() {
    return fetch('apartments.json')
      .then(this._checkResponse)
  }

}
