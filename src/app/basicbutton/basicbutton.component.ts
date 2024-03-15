import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-basicbutton',
  templateUrl: './basicbutton.component.html',
  styleUrl: './basicbutton.component.scss',
})
export class BasicbuttonComponent {
  @Input({ alias: 'title' }) buttonText: string;
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    this.buttonText = '';
  }

  handleClick(value: string) {
    this.clickEvent.emit(value);
  }
}
