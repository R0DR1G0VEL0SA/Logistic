import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerAddPage } from './trailer-add.page';

describe('TrailerAddPage', () => {
  let component: TrailerAddPage;
  let fixture: ComponentFixture<TrailerAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailerAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
