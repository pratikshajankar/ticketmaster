import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminemployeedashComponent } from './adminemployeedash.component';

describe('AdminemployeedashComponent', () => {
  let component: AdminemployeedashComponent;
  let fixture: ComponentFixture<AdminemployeedashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminemployeedashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminemployeedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
