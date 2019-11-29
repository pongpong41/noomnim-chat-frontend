import { Component } from '@angular/core';
import { GroupService } from '../../group.service';
import { GroupMemberService } from '../../group-member.service';
import { User } from '../../user';
// import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-chat-group-member',
  templateUrl: './group-member.component.html',
  styleUrls: ['./group-member.component.css']
})
export class GroupMemberComponent {
  error = '';
  keys = '';
  members?: User[];

  constructor(private groupService: GroupService,
              private groupMemberService: GroupMemberService) { }

  onSearchGroupMember() {
    // this.groupService.searchGroup(this.keys).subscribe((res) => {
    //   this.groups = res.data;
    // });

    // *** member search
  }

  // onJoinGroup(groupId: number) {
  //   this.groupService.joinGroup(groupId);
  //   this.groupService.joinGroupRes.subscribe(msg => {
  //     if (msg.data) {
  //       this.userService.groupUpdate();
  //     } else {
  //       this.error = msg.error;
  //     }
  //   });
  // }
}
