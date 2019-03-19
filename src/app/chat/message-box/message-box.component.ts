import { Component } from '@angular/core';
import { GroupService } from 'src/app/group.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent {

  constructor(public userService: UserService, public groupService: GroupService) { }

}
