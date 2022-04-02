import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Watchlist1Component } from './watchlist1.component';

describe('Watchlist1Component', () => {
  let component: Watchlist1Component;
  let fixture: ComponentFixture<Watchlist1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Watchlist1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Watchlist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
