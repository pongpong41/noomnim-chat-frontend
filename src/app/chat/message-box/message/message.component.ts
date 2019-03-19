import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  @Input()
  clientName: string;

  @Input()
  content: string;

  @Input()
  isOwner: boolean;

  constructor() { }
}
