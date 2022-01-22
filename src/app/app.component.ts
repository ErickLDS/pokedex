import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterEvent, NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokedex';

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationError) {
      this.router.navigate(["404"]);
    }
    this.cdr.detectChanges();
  }

  ngOnInit() {
    if (localStorage.getItem("theme") != null) {
      window.document.body.classList.replace('default-theme', <string>localStorage.getItem("theme"))
    } else {
      window.document.body.classList.replace('default-theme', 'light-theme')
    }

    this.router.events.subscribe((event: any) => {
      this.navigationInterceptor(event)
    });
  }
}
