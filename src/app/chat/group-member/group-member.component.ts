import { Component } from '@angular/core';
import { GroupMemberService } from '../../group-member.service';
import { User } from '../../user';

@Component({
  selector: 'app-chat-group-member',
  templateUrl: './group-member.component.html',
  styleUrls: ['./group-member.component.css']
})
export class GroupMemberComponent {
  groupId = '';
  members?: User[];

  constructor(private groupMemberService: GroupMemberService) { }

  onSearchGroupMember() {
    this.groupMemberService.getMember(this.groupId).subscribe((res) => {
      this.members = res.data;
    });
  }
}
