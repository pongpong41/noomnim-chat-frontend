import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { HTTPResponse, SocketResponse } from './response';
import { Message } from './message';
import { Observable } from 'rxjs';
import { GroupService } from './group.service';
import { Group } from './group';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messageObservable = this.socket.fromEvent<SocketResponse>('message');

  messages: Message[] = [];

  constructor(private socket: Socket, private http: HttpClient, private userService: UserService, private groupService: GroupService) {
    this.messageObservable.subscribe(response => {
      if (response.data) {
        if (this.groupService.currentGroup && this.groupService.currentGroup.id === response.data.group_id) {
          this.messages.push(response.data);
        }
      }
    });
  }

  sendMessage(content: string): Observable<HTTPResponse<Message>> {
    return this.http.post<HTTPResponse<Message>>('http://localhost:3000/message', {
      content, clientId: this.userService.user.id, groupId: this.groupService.currentGroup.id
    });
  }
}
