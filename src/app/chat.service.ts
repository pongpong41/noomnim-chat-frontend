import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { HTTPResponse } from './response';
import { Message } from './message';
import { Observable } from 'rxjs';
import { GroupService } from './group.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket, private http: HttpClient, private userService: UserService, private groupService: GroupService) { }

  sendMessage(content: string): Observable<HTTPResponse<Message>> {
    return this.http.post<HTTPResponse<Message>>('http://localhost:3000/message', {
      content, clientId: this.userService.user.id, groupId: this.groupService.currentGroup.id
    });
  }
}
