import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  viewEmailState = false;

  constructor() { }

  ngOnInit(): void {
  }

  viewEmail(): void {
    this.viewEmailState = true;
  }

}
