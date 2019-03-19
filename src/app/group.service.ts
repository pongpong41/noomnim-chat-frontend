import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Group } from './group';
import { SocketResponse, HTTPResponse } from './response';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  createGroupRes = this.socket.fromEvent<SocketResponse>('create-group');
  currentGroup?: Group;

  constructor(private socket: Socket, private http: HttpClient, private userService: UserService) {
    this.createGroupRes.subscribe(msg => {
      if (msg.data) {
        this.currentGroup = msg.data;
      }
    });
  }

  createGroup(name: string) {
    this.socket.emit('create-group', name);
  }

  joinGroup(groupId: number) {
    const clientName = this.userService.user.name;
    this.socket.emit('join-group', {clientName, groupId});
  }

  leaveGroup() {

  }

  getGroup(keys: string): Observable<HTTPResponse<Group[]>> {
    return this.http.get<HTTPResponse<Group[]>>('http://localhost:3000/group?keys=' + keys);
  }
}
