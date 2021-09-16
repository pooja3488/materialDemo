import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSidenavComponent } from './progress-sidenav.component';

describe('ProgressSidenavComponent', () => {
  let component: ProgressSidenavComponent;
  let fixture: ComponentFixture<ProgressSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
