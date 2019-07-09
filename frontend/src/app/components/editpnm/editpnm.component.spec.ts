import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpnmComponent } from './editpnm.component';

describe('EditpnmComponent', () => {
  let component: EditpnmComponent;
  let fixture: ComponentFixture<EditpnmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpnmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
