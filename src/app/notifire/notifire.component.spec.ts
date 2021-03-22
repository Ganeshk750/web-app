import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifireComponent } from './notifire.component';

describe('NotifireComponent', () => {
  let component: NotifireComponent;
  let fixture: ComponentFixture<NotifireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
