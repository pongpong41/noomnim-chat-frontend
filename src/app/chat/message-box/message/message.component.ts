import { Component, Input } from '@angular/core';
import { Message } from 'src/app/message';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  @Input()
  message: Message;

  constructor(private userService: UserService) { }

  get isOwner(): boolean {
    return this.message.posted_by.id === this.userService.user.id;
  }

  get isUnreadMessage(): boolean {
    return !Number.isInteger(this.message.id);
  }
}
