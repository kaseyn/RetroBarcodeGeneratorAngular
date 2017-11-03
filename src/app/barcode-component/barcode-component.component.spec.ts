import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeComponentComponent } from './barcode-component.component';

describe('BarcodeComponentComponent', () => {
  let component: BarcodeComponentComponent;
  let fixture: ComponentFixture<BarcodeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
