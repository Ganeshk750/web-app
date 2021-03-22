import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifireComponent } from '../notifire/notifire.component';


@Injectable({
  providedIn: 'root'
})
export class NotifireService {

  constructor(private snakBar: MatSnackBar) { }

  showNotification(displayMessage: string, buttonText: string){
    this.snakBar.openFromComponent(NotifireComponent, {
      data: {
        message: displayMessage,
        buttonText: buttonText
      },
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'error'
    });
  }
}
