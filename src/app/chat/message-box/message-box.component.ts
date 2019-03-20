import { ElementRef, ViewChild, OnInit, Component } from '@angular/core';
import { GroupService } from 'src/app/group.service';
import { UserService } from 'src/app/user.service';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor(public userService: UserService, public chatService: ChatService) { }

  ngOnInit() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      console.log('checked');
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
