import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireLogComponent } from './fireLog.component';

describe('FireLogComponent', () => {
  let component: FireLogComponent;
  let fixture: ComponentFixture<FireLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
