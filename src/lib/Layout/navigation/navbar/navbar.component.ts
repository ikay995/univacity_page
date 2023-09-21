import {Component, Input, OnInit } from '@angular/core'; 
import { NgIf, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, RouterLink, RouterLinkActive]
})
export class NavBarComponent implements OnInit {

  @Input('isMobile') isMobile: boolean;

  constructor() {
  }

  ngOnInit(): void { 
    console.log("check window",window)
  }

}
