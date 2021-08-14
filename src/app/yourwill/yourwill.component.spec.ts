import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourwillComponent } from './yourwill.component';

describe('YourwillComponent', () => {
  let component: YourwillComponent;
  let fixture: ComponentFixture<YourwillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourwillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourwillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
