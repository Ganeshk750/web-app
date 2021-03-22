import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-notifire',
  templateUrl: './notifire.component.html',
  styleUrls: ['./notifire.component.scss']
})
export class NotifireComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snakBarRef: MatSnackBarRef<NotifireComponent>) { }

  ngOnInit() {
  }

}
