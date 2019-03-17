import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  name = '';
  error = '';
  keys = '';
  group = {};

  constructor(private groupService: GroupService, private router: Router) { }

  ngOnInit() {
    // this.groupService.getGroup('a').subscribe((data) => this.group = data);
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
    this.groupService.getGroup(this.keys).subscribe((data) => this.group = data);
  }

}
