import { Component, OnInit } from '@angular/core';
import { Group } from '../../group';
import { GroupService } from '../../group.service';
import { UserService } from 'src/app/user.service';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-chat-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name = '';
  error = '';
  keys = '';
  groups?: Group[];

  constructor(private groupService: GroupService, private userService: UserService, private chatService: ChatService) {
    this.groupService.createGroupRes.subscribe(msg => {
      if (msg.data) {
        this.name = '';
        this.userService.groupUpdate();
        this.chatService.setCurrentGroup(msg.data);
      } else {
        this.error = msg.error;
      }
    });
  }

  ngOnInit() {
  }

  onCreateGroup() {
    this.error = '';
    this.groupService.createGroup(this.name);
  }

  onSearchGroup() {
    this.groupService.getGroup(this.keys).subscribe((res) => {
      this.groups = res.data;
    });
  }

  onJoinGroup(groupId: number) {
    this.groupService.joinGroup(groupId);
    this.groupService.joinGroupRes.subscribe(msg => {
      if (msg.data) {
        this.userService.groupUpdate();
      } else {
        this.error = msg.error;
      }
    });
  }
}
