import store from 'store2';
import API from './../utils/api';
export default class Store {
  constructor() {
    const TOKEN = store.get('TOKEN');
    this.api = new API();
    this.headers = [
      { header: 'Content-Type', value: 'application/json' },
      { header: 'Authorization', value: `BEARER ${TOKEN}` },
      { header: 'Access-Control-Allow-Origin', value: `*` },
      { header: 'Access-Control-Allow-Credentials', value: 'true' },
      { header: 'Access-Control-Allow-Headers', value: 'Authorization' },
      {
        header: 'Access-Control-Allow-Methods',
        value: 'GET, POST, PUT, DELETE',
      },
    ];
    this.headersLogin = [
      { header: 'Content-Type', value: 'application/json' },
    ];
  }
  Login(email, password, callback) {
    this.api.Request({
      method: 'POST',
      url: '/users/login',
      data: {
        email: email,
        password: password,
      },
      headers: this.headersLogin,
      callback: callback,
    });
  }

  SignUp(email, username, password, phone, callback) {
    this.api.Request({
      method: 'POST',
      url: '/users/signup',
      data: {
        isActive: true,
        username: username,
        password: password,
        email: email,
        role: ["user"],
        phone: phone,
        image: "http://placeimg.com/333/333"
      },
      headers: this.headersLogin,
      callback: callback,
    });
  }

  UpdateProfile(userid, username, password, phone, callback) {
    this.api.Request({
      method: 'PATCH',
      url: '/users/update/'+userid,
      data: {
        username: username,
        password: password,
        phone: phone,
      },
      headers: this.headers,
      callback: callback,
    });
  }

  CreateSugg(userid, catid, callback) {
    this.api.Request({
      method: 'POST',
      url: '/sugg/create',
      data: {
        idCategory: catid,
        idUser: userid,
      },
      headers: this.headers,
      callback: callback,
    });
  }

  UpdateSugg(userid, catid, callback) {
    this.api.Request({
      method: 'PATCH',
      url: '/sugg/'+userid,
      data: {
        idCategory: catid
      },
      headers: this.headers,
      callback: callback,
    });
  }

  GetSugg(userid, callback){
    this.api.Request({
      method: 'GET',
      url: '/sugg/user/'+userid,
      data: {},
      headers: this.headers,
      callback: callback,
    });
  }


  SimpleRequest(type, url, data, callback) {
    this.api.Request({
      method: type,
      url: url,
      data: data,
      headers: this.headers,
      callback: callback,
    });
  }

  getProfile(userid,{callback}) {
    this.api.Request({
      method: 'GET',
      url: '/users/'+userid,
      data: {},
      headers: this.headers,
      callback: callback,
    });
  }

  getProduct(productid,{callback}) {
    this.api.Request({
      method: 'GET',
      url: '/products/'+productid,
      data: {},
      headers: this.headers,
      callback: callback,
    });
  }

  getProducts({ data = {}, callback }) {
    this.SimpleRequest('GET', '/products', data, callback);
  }

  getCatProducts(catid,{callback}) {
    this.api.Request({
      method: 'GET',
      url: '/products/cat/'+catid,
      data: {},
      headers: this.headers,
      callback: callback,
    });
  }

  getCategories({ data = {}, callback }) {
    this.SimpleRequest('GET', '/categories', data, callback);
  }
}
