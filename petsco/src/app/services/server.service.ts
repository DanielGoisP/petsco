import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';

import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  private async request(method: string, url: string, data?: any) {
    const result = await lastValueFrom(this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
    }));
    return result;
  }
  getUser() {
    return this.request('GET', `${environment.serverUrl}/cadastro`);
  }

  createUser(user: any) {
    return this.request('POST', `${environment.serverUrl}/cadastro`, user);
  }

  loginUser(user: any) {
    return this.request('POST', `${environment.serverUrl}/login`, user);
  }
}
