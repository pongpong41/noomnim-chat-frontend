import { Component, OnInit } from '@angular/core';
import { Group } from '../../group';
import { GroupService } from '../../group.service';
import { UserService } from 'src/app/user.service';

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

  constructor(private groupService: GroupService, private userService: UserService) {
    this.groupService.createGroupRes.subscribe(msg => {
      if (msg.data) {
        this.userService.groupUpdate();
        this.groupService.currentGroup = msg.data;
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
}
