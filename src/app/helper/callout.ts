import axios, { AxiosInstance } from 'axios'
import { CookieService } from 'ngx-cookie-service';
import { Result } from '../models/model';
import { HttpMethod } from '../enum/enum';

export class Callout {

    constructor(public baseURL: string) { }
    cookie = new CookieService(document, 'browser')
    isMock = false;
    private async createRequest(method: HttpMethod, apiURL: string, body?: any, noAuthRequired?: boolean): Promise<Result> {
        let reqObject: any = {
            method: method,
            url: this.baseURL + '/' + apiURL
        }
        if (body) {
            reqObject.data = body
        }
        const request: AxiosInstance = axios.create(reqObject);
        if (!(noAuthRequired) && !this.isMock) {
            await this.checkSessionAndUserToken();
            const sid = this.cookie.get('sid');
            request.defaults.headers['Authorization'] = JSON.stringify({ sid: sid });

        }
        if (apiURL.includes('auth/session')) {
            const userToken = this.cookie.get('userToken');
            request.defaults.headers['Authorization'] = JSON.stringify({ userToken: userToken });
        }

        const abortController = new AbortController();
        return new Promise(async (resolve, reject) => {
            try {
                let isFetched = false
                let response: Result;
                response = await request.request(request.defaults);
                isFetched = true
                return resolve(response.data);
            } catch (ex: any) {
                return reject(Result.error(ex.message));
            }
        });
    }

    async get(endpoint: string, noAuthRequired?: boolean) {
        return await this.createRequest(HttpMethod.get, endpoint, undefined, noAuthRequired);
    }
    async post(endpoint: string, body: any, noAuthRequired?: boolean) {
        return await this.createRequest(HttpMethod.post, endpoint, body, noAuthRequired);
    }
    async put(endpoint: string, body: any, noAuthRequired?: boolean) {
        return await this.createRequest(HttpMethod.put, endpoint, body, noAuthRequired);
    }
    async delete(endpoint: string, sid: string, body?: any, noAuthRequired?: boolean) {
        return await this.createRequest(HttpMethod.delete, endpoint, body, noAuthRequired);
    }
    async checkSessionAndUserToken() {
        const sidExpiresOn = this.cookie.get('sidExpiresOn');
        const userTokenExpiresOn = this.cookie.get('userTokenExpiresOn');
        const sid = this.cookie.get('sid');
        const userToken = this.cookie.get('userToken');
        if (sid.length && !(new Date(sidExpiresOn) > new Date())) {
            this.cookie.delete('sid');
            this.cookie.delete('sidExpiresOn');
            if (userToken.length && (new Date(userTokenExpiresOn) > new Date())) {
                let result: Result = await this.get(`auth/session`, true);
                if (result.success) {
                    this.cookie.set('sid', result.data.sid);
                    this.cookie.set('sidExpiresOn', result.data.expiresOn);
                }
            }
        }
    }
}
