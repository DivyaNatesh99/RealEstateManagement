import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAuthComponent } from './manager-auth.component';

describe('ManagerAuthComponent', () => {
  let component: ManagerAuthComponent;
  let fixture: ComponentFixture<ManagerAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
