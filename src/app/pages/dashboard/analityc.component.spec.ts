import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalitycComponent } from './analityc.component';

describe('AnalitycComponent', () => {
  let component: AnalitycComponent;
  let fixture: ComponentFixture<AnalitycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalitycComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalitycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
