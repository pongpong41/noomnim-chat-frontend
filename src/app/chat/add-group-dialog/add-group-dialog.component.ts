import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/group.service';
import { UserService } from 'src/app/user.service';
import { ChatService } from 'src/app/chat.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-group-dialog',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: ['./add-group-dialog.component.css']
})
export class AddGroupDialogComponent implements OnInit {

  isLoading = false;
  name: string;
  error: string;

  constructor(private userService: UserService,
              private groupService: GroupService,
              private chatService: ChatService,
              private dialogRef: MatDialogRef<undefined>) { }

  ngOnInit() {
    this.groupService.createGroupRes.subscribe(msg => {
      this.isLoading = false;
      if (msg.data) {
        this.name = '';
        this.userService.groupUpdate();
        this.chatService.setCurrentGroup(msg.data);
        this.dialogRef.close();
      } else {
        this.error = msg.error;
      }
    });
  }

  onCreateGroup() {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.error = '';
    this.groupService.createGroup(this.name);
  }

}
