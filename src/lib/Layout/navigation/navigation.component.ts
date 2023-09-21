import {Component, OnInit } from '@angular/core'; 
import { NgIf, NgFor } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { NavBarComponent } from './navbar/navbar.component';
import { NavigationService } from './navigation.service';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, MainNavComponent, NavBarComponent, VerticalNavComponent]
})
export class NavigationComponent implements OnInit {
  
  isMobile: boolean;
  toggleClicked: boolean = false;
  openNav: boolean = true;

  constructor(private nS: NavigationService) {
    window.onresize = function(event) {
      window.location.reload()
    };
  }

  ngOnInit(): void { 
    this.isMobile = this.nS.isMobile;
  }

  isToggled(data: boolean) {
    if(!this.toggleClicked) {
      this.openNav = true;
      this.toggleClicked = data;
    }
    else {
      this.openNav = false;
      this.toggleClicked = false;
    }
  }

}
