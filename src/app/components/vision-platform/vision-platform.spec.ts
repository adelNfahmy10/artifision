import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionPlatform } from './vision-platform';

describe('VisionPlatform', () => {
  let component: VisionPlatform;
  let fixture: ComponentFixture<VisionPlatform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionPlatform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionPlatform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
