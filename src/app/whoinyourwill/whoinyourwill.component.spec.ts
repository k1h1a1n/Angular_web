import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoinyourwillComponent } from './whoinyourwill.component';

describe('WhoinyourwillComponent', () => {
  let component: WhoinyourwillComponent;
  let fixture: ComponentFixture<WhoinyourwillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoinyourwillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoinyourwillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
