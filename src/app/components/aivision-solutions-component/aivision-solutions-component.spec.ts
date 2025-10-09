import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIVisionSolutionsComponent } from './aivision-solutions-component';

describe('AIVisionSolutionsComponent', () => {
  let component: AIVisionSolutionsComponent;
  let fixture: ComponentFixture<AIVisionSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIVisionSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIVisionSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
