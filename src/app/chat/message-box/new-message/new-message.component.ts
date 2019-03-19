import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  message = '';

  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  onEnter() {
    this.chat.sendMessage(this.message).subscribe(response => {
      if (response.data) {
        this.message = '';
      }
    });
  }
}
