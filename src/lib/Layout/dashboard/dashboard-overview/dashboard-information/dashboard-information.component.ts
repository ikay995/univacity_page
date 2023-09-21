import {Component, OnInit } from '@angular/core'; 
import { NgIf, NgFor } from '@angular/common';
import { NavigationService } from 'src/lib/Layout/navigation/navigation.service';

@Component({
    selector: 'app-dashboard-information',
    templateUrl: './dashboard-information.component.html',
    styleUrls: ['./dashboard-information.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor,]
})
export class DashboardInformationComponent implements OnInit {

  constructor(public nS: NavigationService) {
  
  }

  ngOnInit(): void { 
   
  }

}
