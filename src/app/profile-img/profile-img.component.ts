import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.css']
})
export class ProfileImgComponent {

  private readonly backgroundColors = [
    'f44336', 'e91e63', '9c27b0', '673ab7', '3f51b5', '2196f3', '03a9f4', '00bcd4', '009688', '4caf50',
    '8bc34a', 'cddc39', 'ffeb3b', 'ffc107', 'ff9800', 'ff5722', '795548', '9e9e9e', '607d8b'
  ];
  private readonly colors = [
    'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff',
    'ffffff', '000000', '000000', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff'
  ];

  @Input()
  size = 32;

  @Input()
  name: string;

  constructor() { }

  get url(): string {
    return 'https://ui-avatars.com/api/?uppercase=false&name=' + this.name + '&background=' + this.backgroundColor + '&color=' + this.color;
  }

  private get colorSet(): number {
    let value = 0;
    for (let i = 0; i < this.name.length; i++) {
      value += this.name.charCodeAt(i) * (2 + 7 * i);
    }
    return value % this.backgroundColors.length;
  }

  get color(): string {
    return this.colors[this.colorSet];
  }

  get backgroundColor(): string {
    return this.backgroundColors[this.colorSet];
  }

}
