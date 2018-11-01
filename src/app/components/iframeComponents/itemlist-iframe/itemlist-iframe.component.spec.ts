import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemlistIframeComponent } from './itemlist-iframe.component';

describe('ItemlistIframeComponent', () => {
  let component: ItemlistIframeComponent;
  let fixture: ComponentFixture<ItemlistIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemlistIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemlistIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
