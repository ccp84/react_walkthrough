import axios from "axios";

axios.defaults.baseURL = "https://rest-tutorial.herokuapp.com/";
axios.defaults.headers.post['Content-Type'] = 'mulipart/form-data';
axios.defaults.withCredentials = true;