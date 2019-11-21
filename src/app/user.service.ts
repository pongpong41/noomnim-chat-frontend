import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { resolve } from 'url';
import { User } from './user';
import { SocketResponse, HTTPResponse } from './response';
import { Group } from './group';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  connect = this.socket.fromEvent('connect');
  createClient = this.socket.fromEvent<SocketResponse>('create-client');
  user?: User;
  groups?: Group[];

  constructor(private socket: Socket, private http: HttpClient) {
    this.connect.subscribe(() => {
      if (this.user) {
        this.socket.emit('create-client', this.user.name);
      }
    });
    this.createClient.subscribe(msg => {
      if (msg.data) {
        this.user = msg.data.client;
        this.groups = msg.data.groups;
      }
    });
  }

  login(name: string) {
    this.socket.emit('create-client', name);
  }

  logout() {
    this.user = undefined;
  }

  groupUpdate() {
    this.http.get<HTTPResponse<Group[]>>(resolve(environment.apiUrl, 'user/group?clientId=' + this.user.id)).subscribe((res) => {
      this.groups = res.data;
    });
  }
}
