import {Component, HostListener, Input, OnInit, ViewChild } from '@angular/core'; 
import { NgIf, NgFor } from '@angular/common';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';

@Component({
    selector: 'app-vertical-nav',
    templateUrl: './vertical-nav.component.html',
    styleUrls: ['./vertical-nav.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatTreeModule, MatMenuModule,]
})
export class VerticalNavComponent implements OnInit {

@ViewChild('snav') drawer: MatDrawer;
@Input('closeNav') open: boolean = true;

  constructor() {
  }

  ngOnInit(): void { 
    
  }

}
