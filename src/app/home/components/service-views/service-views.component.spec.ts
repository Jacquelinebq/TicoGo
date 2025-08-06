import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceViewsComponent } from './service-views.component';

describe('ServiceViewsComponent', () => {
  let component: ServiceViewsComponent;
  let fixture: ComponentFixture<ServiceViewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceViewsComponent]
    });
    fixture = TestBed.createComponent(ServiceViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
