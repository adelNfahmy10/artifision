import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCtaSection } from './ai-cta-section';

describe('AiCtaSection', () => {
  let component: AiCtaSection;
  let fixture: ComponentFixture<AiCtaSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiCtaSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiCtaSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
