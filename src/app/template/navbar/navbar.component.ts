import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

import { Theme } from "./interface";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public theme: Theme = 'light-theme';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  switchTheme() {
    this.document.body.classList.replace(this.theme, 
      this.theme === 'light-theme' ? (this.theme = 'dark-theme') : (this.theme = 'light-theme')
    )
  }

}
