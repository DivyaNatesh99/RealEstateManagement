import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpropertiesComponent } from './listproperties.component';

describe('ListpropertiesComponent', () => {
  let component: ListpropertiesComponent;
  let fixture: ComponentFixture<ListpropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
