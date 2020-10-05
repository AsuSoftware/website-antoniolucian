import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navState = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickAction(): void {
    const element = document.getElementById('nav');
    const iconBtn = document.getElementById('iconBtn');
    if (this.navState === false) {
      element.className = 'nav-bar is-visible';
      iconBtn.className = 'fas fa-times';
      this.navState = true;
    } else {
      element.className = 'nav-bar';
      iconBtn.className = 'fas fa-bars';
      this.navState = false;
    }
  }

}
