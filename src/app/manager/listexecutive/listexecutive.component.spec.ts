import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListexecutiveComponent } from './listexecutive.component';

describe('ListexecutiveComponent', () => {
  let component: ListexecutiveComponent;
  let fixture: ComponentFixture<ListexecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListexecutiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListexecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
