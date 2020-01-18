import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesOpenedComponent } from './cases-opened.component';

describe('CasesOpenedComponent', () => {
  let component: CasesOpenedComponent;
  let fixture: ComponentFixture<CasesOpenedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesOpenedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesOpenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
