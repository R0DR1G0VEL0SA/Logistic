import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab4DetailsPage } from './tab4-details.page';

describe('Tab4DetailsPage', () => {
  let component: Tab4DetailsPage;
  let fixture: ComponentFixture<Tab4DetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab4DetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab4DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
