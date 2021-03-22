import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppService } from '../service/app.service';
import { NotifireService } from '../service/notifire.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cards = [];
  cardsForHandset = [];
  cardForWeb = [];
  isHandset: boolean = false;
  /** Based on the screen size, switch from standard to one column per row */
  isHandsetObserver: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }

      return false;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
              public appService: AppService,
              private notifireService: NotifireService) {}

  ngOnInit(){
    this.isHandsetObserver.subscribe(currentObserverValue => {
      this.isHandset = currentObserverValue;
      this.loadCards();
    });
    this.appService.getDeals().subscribe(
      response => {
        this.cardsForHandset = response.handsetCards;
        this.cardForWeb = response.webCards;
        this.loadCards();
       },
       error => {
         //alert('There was an error in receiving data from server. Please try again later');
         this.notifireService.showNotification('There was an error in receiving data from server!', 'OK')
        }
    )

  }

  loadCards() {
    this.cards = this.isHandset ? this.cardsForHandset: this.cardForWeb;
  }

  getImage(imageName: string): string {
    return 'url(' + 'http://localhost:3000/images/' + imageName + '.jpg' + ')';
  }

}
