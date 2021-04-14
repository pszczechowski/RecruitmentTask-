import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AboutComponent} from './about/about.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(AboutComponent, {
      width: '350px',
    });
  }
}
