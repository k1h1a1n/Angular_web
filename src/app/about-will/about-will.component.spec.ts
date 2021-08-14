import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWillComponent } from './about-will.component';

describe('AboutWillComponent', () => {
  let component: AboutWillComponent;
  let fixture: ComponentFixture<AboutWillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutWillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
