/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
const { APIURL } = require('../constants.json');
export default class API {
  constructor(){
  }
  getParams(params)
  {
    return params.map((e) => `${Object.keys({element})[0]}=${element.value}`).join('&');
  }
  Request({
    method = 'get',
    headers = [],
    data = {},
    url = '',
    callback,
  }) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        callback(JSON.parse(this.response));
      }
    };
    request.open(method, `${APIURL}${url}`);
    headers.forEach((element) => {
      request.setRequestHeader(element.header, element.value);
    });
    request.send(JSON.stringify(data));
  }
}
