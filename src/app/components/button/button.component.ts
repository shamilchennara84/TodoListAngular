import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input()
  text!: string;
  @Input()
  color!: string;
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
