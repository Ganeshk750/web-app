import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';


@Component({
  selector: 'app-notifire',
  templateUrl: './notifire.component.html',
  styleUrls: ['./notifire.component.scss']
})
export class NotifireComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snakBarRef: MatSnackBarRef<NotifireComponent>
  ) { }

  ngOnInit() {
  }

}
