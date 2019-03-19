import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Group } from '../../group';
import { GroupService } from 'src/app/group.service';
import { Socket } from 'ngx-socket-io';
import { SocketResponse } from 'src/app/response';

@Component({
  selector: 'app-chat-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  error = '';
  leaveGroupRes = this.socket.fromEvent<SocketResponse>('leave-group');
  constructor(public userService: UserService, private groupService: GroupService, private socket: Socket) { }

  ngOnInit() {
  }

  onSelectGroup(group: Group) {
    this.groupService.currentGroup = group;
  }

  onLeaveGroup(group: Group) {
    this.error = '';
    this.groupService.leaveGroup(this.userService.user.id, group.id);
    this.leaveGroupRes.subscribe(msg => {
      if (msg.data) {
        this.userService.groupUpdate();
        this.groupService.currentGroup = null;
      } else {
        this.error = msg.error;
      }
    });
  }
}
