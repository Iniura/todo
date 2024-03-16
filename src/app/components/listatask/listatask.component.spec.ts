import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListataskComponent } from './listatask.component';

describe('ListataskComponent', () => {
  let component: ListataskComponent;
  let fixture: ComponentFixture<ListataskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListataskComponent]
    });
    fixture = TestBed.createComponent(ListataskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
