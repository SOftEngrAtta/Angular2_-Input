/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyVoteComponent } from './my-vote.component';

describe('MyVoteComponent', () => {
  let component: MyVoteComponent;
  let fixture: ComponentFixture<MyVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
