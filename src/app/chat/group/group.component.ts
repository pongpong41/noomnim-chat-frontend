import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Group } from '../../group';
import { GroupService } from 'src/app/group.service';
import { ChatService } from 'src/app/chat.service';
import { SocketResponse } from 'src/app/response';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  error = '';
  leaveGroupRes = this.socket.fromEvent<SocketResponse>('leave-group');
  constructor(public userService: UserService,
              private groupService: GroupService,
              private socket: Socket,
              private chatService: ChatService) {
    this.leaveGroupRes.subscribe(msg => {
      if (msg.data) {
        this.userService.groupUpdate();
      } else {
        this.error = msg.error;
      }
    });
  }

  ngOnInit() {
  }

  groupStyle(groupId: number) {
    if (this.chatService.currentGroup) {
      return { selected: groupId === this.chatService.currentGroup.id };
    }
    return {};
  }

  onSelectGroup(group: Group) {
    this.chatService.setCurrentGroup(group);
  }

  onLeaveGroup(group: Group) {
    this.error = '';
    this.groupService.leaveGroup(this.userService.user.id, group.id);
    if (this.chatService.currentGroup === group) {
      this.chatService.setCurrentGroup(null);
    }
  }
}
