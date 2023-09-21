import {Component, OnInit } from '@angular/core'; 
import { NgIf, NgFor } from '@angular/common';
import { NavigationService } from 'src/lib/Layout/navigation/navigation.service';

@Component({
    selector: 'app-dashboard-footer',
    templateUrl: './dashboard-footer.component.html',
    styleUrls: ['./dashboard-footer.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor,]
})
export class DashboardFooterComponent implements OnInit {

  constructor(public nS: NavigationService) {
  
  }

  ngOnInit(): void { 
   
  }

}