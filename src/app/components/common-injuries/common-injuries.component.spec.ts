import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInjuriesComponent } from './common-injuries.component';

describe('CommonInjuriesComponent', () => {
  let component: CommonInjuriesComponent;
  let fixture: ComponentFixture<CommonInjuriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonInjuriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonInjuriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
