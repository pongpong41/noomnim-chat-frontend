import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  message = '';
  @Output() newMessage = new EventEmitter<null>();

  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  onEnter() {
    if (this.message.trim().length === 0) { return; }
    this.chat.sendMessage(this.message).subscribe(response => {
      this.newMessage.emit(null);
      if (response.data) {
        this.message = '';
      }
    });
  }
}
