import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadmindashComponent } from './superadmindash.component';

describe('SuperadmindashComponent', () => {
  let component: SuperadmindashComponent;
  let fixture: ComponentFixture<SuperadmindashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadmindashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadmindashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
