import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/group.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public groupService: GroupService) { }

  ngOnInit() {
  }

  get groupName(): string {
    if (this.groupService.currentGroup) {
      return this.groupService.currentGroup.name;
    }
    return 'No group selected';
  }
}
