import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyreDashboardComponent } from './tyre-dashboard.component';

describe('TyreDashboardComponent', () => {
  let component: TyreDashboardComponent;
  let fixture: ComponentFixture<TyreDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyreDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyreDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
