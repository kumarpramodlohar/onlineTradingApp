import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsharesComponent } from './topshares.component';

describe('TopsharesComponent', () => {
  let component: TopsharesComponent;
  let fixture: ComponentFixture<TopsharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopsharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
