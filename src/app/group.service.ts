import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Group } from './group';
import { SocketResponse, HTTPResponse } from './response';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  createGroupRes = this.socket.fromEvent<SocketResponse>('create-group');
  joinGroupRes = this.socket.fromEvent<SocketResponse>('join-group');
  currentGroup?: Group;

  constructor(private socket: Socket, private http: HttpClient, private userService: UserService, private chatService: ChatService) {
    this.joinGroupRes.subscribe(msg => {
      if (msg.data) {
        this.currentGroup = msg.data.group;
      }
    });
  }

  createGroup(name: string) {
    this.socket.emit('create-group', { name, clientId: this.userService.user.id });
  }

  joinGroup(groupId: number) {
    const clientId = this.userService.user.id;
    this.socket.emit('join-group', {clientId, groupId});
  }

  leaveGroup(clientId: number, groupId: number) {
    this.socket.emit('leave-group', { clientId, groupId});
  }

  getGroup(keys: string): Observable<HTTPResponse<Group[]>> {
    return this.http.get<HTTPResponse<Group[]>>('http://localhost:3000/group?keys=' + keys);
  }
}
