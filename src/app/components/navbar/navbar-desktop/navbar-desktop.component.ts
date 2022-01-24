import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Theme } from '@/src/app/template/navbar/types';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.scss']
})
export class NavbarDesktopComponent {
  @Input() theme: Theme = 'light-theme';
  @Output() changeTheme = new EventEmitter();

  constructor() { }

  switchTheme() {
    this.changeTheme.emit();
  }

}
