import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesDisplayComponent } from './packages-display.component';

describe('PackagesDisplayComponent', () => {
  let component: PackagesDisplayComponent;
  let fixture: ComponentFixture<PackagesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
