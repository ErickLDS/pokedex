import { Component, OnInit } from '@angular/core';

import { Theme } from "./types";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public theme: Theme = 'light-theme';

  constructor() {}

  ngOnInit(): void {
    localStorage.getItem("theme") != null && (this.theme = <Theme>localStorage.getItem("theme"))
  }

  switchTheme() { 
    if (localStorage.getItem("theme") != null) {
      window.document.body.classList.replace(<string>localStorage.getItem("theme"), this.setTheme())
    } else {
      window.document.body.classList.replace(this.theme, 
        this.theme === 'light-theme' ? (this.theme = 'dark-theme') : (this.theme = 'light-theme')
      )
      localStorage.setItem("theme", this.theme);
    }
  }

  setTheme(): Theme {
    if (localStorage.getItem("theme") === 'light-theme') {
      localStorage.setItem("theme", 'dark-theme')
      return this.theme = 'dark-theme'
    } else {
      localStorage.setItem("theme", 'light-theme')
      return this.theme = 'light-theme'
    }
  }
}
