import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesClosedComponent } from './cases-closed.component';

describe('CasesClosedComponent', () => {
  let component: CasesClosedComponent;
  let fixture: ComponentFixture<CasesClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
