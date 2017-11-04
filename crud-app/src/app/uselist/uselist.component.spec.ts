import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UselistComponent } from './uselist.component';

describe('UselistComponent', () => {
  let component: UselistComponent;
  let fixture: ComponentFixture<UselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
