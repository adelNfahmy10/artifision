import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-aivision-solutions-component',
  imports: [NgClass, TranslatePipe],
  templateUrl: './aivision-solutions-component.html',
  styleUrl: './aivision-solutions-component.scss'
})
export class AIVisionSolutionsComponent {
    openIndex: number | null = null;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  items = [
    {
      title: 'VISION.HOW_WORK',
      content: `VISION.HOW_WORK_DESC`,
    },
    {
      title: 'VISION.WHY_CHOOSE',
      content: `VISION.WHY_CHOOSE_DESC`,
    },
    {
      title: 'VISION.WHY_ARTIFISION',
      content: `VISION.WHY_ARTIFISION_DESC`,
    }
  ];
}
