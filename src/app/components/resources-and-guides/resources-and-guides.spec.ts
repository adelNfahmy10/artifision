import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesAndGuides } from './resources-and-guides';

describe('ResourcesAndGuides', () => {
  let component: ResourcesAndGuides;
  let fixture: ComponentFixture<ResourcesAndGuides>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesAndGuides]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesAndGuides);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
