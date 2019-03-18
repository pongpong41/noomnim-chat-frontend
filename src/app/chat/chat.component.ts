import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { UserService } from '../user.service';
import { Groups } from '../groups';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  name = '';
  error = '';
  keys = '';
  groups?: {};

  constructor(private groupService: GroupService, public userService: UserService) { }

  ngOnInit() {
    this.onSearchGroup();
  }

  onCreateGroup() {
    this.error = '';
    this.groupService.createGroup(this.name);
    this.groupService.createGroupRes.subscribe(msg => {
      if (msg.data) {
        // this.router.navigate(['group']);
      } else {
        this.error = msg.error;
      }
    });
  }

  onSearchGroup() {
    this.groupService.getGroup(this.keys).subscribe((res) => {
      this.groups = res.data;
    });
  }

}
