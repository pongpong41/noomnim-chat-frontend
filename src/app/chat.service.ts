import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { HTTPResponse, SocketResponse } from './response';
import { Message } from './message';
import { Observable } from 'rxjs';
import { Group } from './group';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messageObservable = this.socket.fromEvent<SocketResponse>('message');

  messages: Message[] = [];
  currentGroup?: Group;

  constructor(private socket: Socket, private http: HttpClient, private userService: UserService) {
    this.messageObservable.subscribe(response => {
      if (response.data) {
        if (this.currentGroup && this.currentGroup.id === response.data.group_id) {
          const repeatedMessage = this.messages.find(message => message.id === response.data.id);
          if (!repeatedMessage) {
            this.messages.push(response.data);
            this.messages.sort((a, b) => a.id - b.id);
            this.socket.emit('message-ack', {
              clientId: this.userService.user.id,
              groupId: this.currentGroup.id,
              messageId: this.messages[this.messages.length - 1].id
            });
          }
        }
      }
    });
  }

  setCurrentGroup(group?: Group) {
    this.currentGroup = group;
    if (group) {
      this.getUnreadMessage(group.id);
    }
  }

  sendMessage(content: string): Observable<HTTPResponse<Message>> {
    return this.http.post<HTTPResponse<Message>>('http://localhost:3000/message', {
      content, clientId: this.userService.user.id, groupId: this.currentGroup.id
    });
  }

  filterMessage(groupId: number): Message[] {
    return this.messages.filter(message => message.group_id === groupId);
  }

  getUnreadMessage(groupId: number) {
    this.socket.emit('get-unread', { clientId: this.userService.user.id, groupId });
  }
}
