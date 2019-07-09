import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpnmComponent } from './newpnm.component';

describe('NewpnmComponent', () => {
  let component: NewpnmComponent;
  let fixture: ComponentFixture<NewpnmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpnmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
