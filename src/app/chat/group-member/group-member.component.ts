import { Component } from '@angular/core';
import { User } from '../../user';
import { Group } from 'src/app/group';
import { GroupMemberService } from '../../group-member.service';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-chat-group-member',
  templateUrl: './group-member.component.html',
  styleUrls: ['./group-member.component.css']
})
export class GroupMemberComponent {

  constructor(private groupMemberService: GroupMemberService,
              public chatService: ChatService) { }
}
