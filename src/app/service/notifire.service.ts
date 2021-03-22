import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifireComponent } from '../notifire/notifire.component';



@Injectable({
  providedIn: 'root'
})
export class NotifireService {

  constructor(private snakBar: MatSnackBar) { }

  showNotification(displayMessage: string, buttonText: string, messageType: 'error' | 'success') {
    this.snakBar.openFromComponent(NotifireComponent, {
      data: {
        message: displayMessage,
        buttonText: buttonText,
        type: messageType
      },
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: messageType
    })
  }

}
