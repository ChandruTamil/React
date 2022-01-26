import axios from "axios";
import { GetDate } from "../lib/getdate";
export default class HttpService {
    async getData(){
        return await axios.get('https://hn.algolia.com/api/v1/search?query=react');
    }
    async getNewsData(){
        return await axios.get('https://newsapi.org/v2/everything?q=tesla&from=' + GetDate() + '&sortBy=publishedAt&apiKey=e4b6cc5a743a40f6b84183b597172219');
    }
    async getUsersData(){
        return await axios.get('https://reqres.in/api/users');
    }
}
//e4b6cc5a743a40f6b84183b597172219  api key
//https://reqres.in/api/users 