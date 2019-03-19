import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { User } from './user';
import { SocketResponse, HTTPResponse } from './response';
import { Group } from './group';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createClient = this.socket.fromEvent<SocketResponse>('create-client');
  user?: User;
  groups?: Group[];

  constructor(private socket: Socket, private http: HttpClient) {
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
    this.http.get<HTTPResponse<Group[]>>('http://localhost:3000/user/group?clientId=' + this.user.id).subscribe((res) => {
      this.groups = res.data;
    });
  }
}
