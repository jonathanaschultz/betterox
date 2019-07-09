import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnmlistComponent } from './pnmlist.component';

describe('PnmlistComponent', () => {
  let component: PnmlistComponent;
  let fixture: ComponentFixture<PnmlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnmlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
