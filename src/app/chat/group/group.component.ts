import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Group } from '../../group';
import { GroupService } from 'src/app/group.service';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-chat-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(public userService: UserService, public chatService: ChatService) { }

  ngOnInit() {
  }

  onSelectGroup(group: Group) {
    this.chatService.setCurrentGroup(group);
  }
}
