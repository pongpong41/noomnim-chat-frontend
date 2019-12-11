import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../../user.service';
import { Group } from '../../../group';
import { GroupService } from 'src/app/group.service';
import { ChatService } from 'src/app/chat.service';
import { SocketResponse } from 'src/app/response';
import { Socket } from 'ngx-socket-io';
import { AddGroupDialogComponent } from '../../add-group-dialog/add-group-dialog.component';

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
              private chatService: ChatService,
              private dialog: MatDialog) {
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

  onLeaveGroup(event: any, group: Group) {
    event.stopPropagation();
    this.error = '';
    this.groupService.leaveGroup(this.userService.user.id, group.id);
    if (this.chatService.currentGroup.id === group.id) {
      this.chatService.setCurrentGroup();
    }
  }

  addGroup() {
    this.dialog.open(AddGroupDialogComponent, {
      width: '400px'
    });
  }
}
