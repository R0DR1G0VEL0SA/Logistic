import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3DetailsPage } from './tab3-details.page';

describe('Tab3DetailsPage', () => {
  let component: Tab3DetailsPage;
  let fixture: ComponentFixture<Tab3DetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3DetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
