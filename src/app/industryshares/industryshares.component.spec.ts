import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrysharesComponent } from './industryshares.component';

describe('IndustrysharesComponent', () => {
  let component: IndustrysharesComponent;
  let fixture: ComponentFixture<IndustrysharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustrysharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrysharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
