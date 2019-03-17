import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Group } from './group';
import { SocketResponse } from './response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  createGroupRes = this.socket.fromEvent<SocketResponse>('create-group');
  group?: Group;

  constructor(private socket: Socket, private http: HttpClient) {
    this.createGroupRes.subscribe(msg => {
      if (msg.data) {
        this.group = msg.data;
      }
    });
  }

  createGroup(name: string) {
    this.socket.emit('create-group', name);
  }

  joinGroup() {

  }

  leaveGroup() {

  }

  getGroup(keys: string) {
    return this.http.get('http://localhost:3000/group?keys=' + keys);
  }
}
