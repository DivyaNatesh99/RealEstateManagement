import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateexceutiveComponent } from './createexceutive.component';

describe('CreateexceutiveComponent', () => {
  let component: CreateexceutiveComponent;
  let fixture: ComponentFixture<CreateexceutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateexceutiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateexceutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
