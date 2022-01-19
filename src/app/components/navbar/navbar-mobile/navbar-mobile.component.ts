import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Theme } from '@/src/app/template/navbar/interface';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent {
  @Input() theme: Theme = 'light-theme';
  @Output() changeTheme = new EventEmitter();

  constructor() { }

  switchTheme() {
    this.changeTheme.emit()
  }

}
