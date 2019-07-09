import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnmComponent } from './pnm.component';

describe('PnmComponent', () => {
  let component: PnmComponent;
  let fixture: ComponentFixture<PnmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
