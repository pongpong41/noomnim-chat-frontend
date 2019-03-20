import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent {

  @Input()
  leftIcon: string;

  @Input()
  title: string;

  @Input()
  rightIcon: string;

  @Output()
  clickLeftIcon = new EventEmitter();

  @Output()
  clickRightIcon = new EventEmitter();

  constructor() { }

  onClickLeftIcon() {
    this.clickLeftIcon.emit();
  }

  onClickRightIcon() {
    this.clickRightIcon.emit();
  }
}
