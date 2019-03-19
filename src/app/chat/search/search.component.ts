import { Component, OnInit } from '@angular/core';
import { Group } from '../../group';
import { GroupService } from '../../group.service';

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

  constructor(private groupService: GroupService) { }

  ngOnInit() {
  }

  onCreateGroup() {
    this.error = '';
    this.groupService.createGroup(this.name);
    this.groupService.createGroupRes.subscribe(msg => {
      // console.log(msg);
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
