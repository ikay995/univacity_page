import {Component, EventEmitter, OnInit, Output } from '@angular/core'; 
import { NgIf, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavBarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, RouterLink, RouterLinkActive, NavBarComponent]
})
export class MainNavComponent implements OnInit {
  @Output('openSideNav') emitNav=new EventEmitter<boolean>();
  toggleSearch: boolean = false;

  constructor() {
  }

  ngOnInit(): void { 
  }

  switch(e: any) {
    if(e.key === 'Enter') this.toggleSearch = false;
  }

}
