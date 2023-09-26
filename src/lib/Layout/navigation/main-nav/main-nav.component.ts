import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 
import { NgIf, NgFor, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavBarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, NgClass, RouterLink, RouterLinkActive, NavBarComponent]
})
export class MainNavComponent implements OnInit {
  @Output('openSideNav') emitNav=new EventEmitter<boolean>();
  @Input('darkmode') darkmode: boolean;
  toggleSearch: boolean = false;

  constructor() {
  }

  ngOnInit(): void { 
  }

  switch(e: any) {
    if(e.key === 'Enter') this.toggleSearch = false;
  }

}
