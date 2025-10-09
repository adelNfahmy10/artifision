import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aivision-solutions-component',
  imports: [NgClass],
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
      title: 'How Our Computer Vision Solutions Work',
      content: `
        Computer vision works by allowing businesses to detect people, objects, and events in real-time
        by leveraging your existing cameras alongside edge devices or the cloud. Detect beyond what your
        hired staff can monitor and capture more accurate visual data to target inefficiencies, detect
        anomalies, and better address productivity issues. Computer vision solutions provide the tools
        for visual inspection through advanced machine learning. We make AI vision implementation easy
        through our comprehensive computer vision platform.
      `,
    },
    {
      title: 'Why Choose Our AI-Powered Vision Platform',
      content: `
        Our platform simplifies AI adoption with pre-trained models, real-time analytics,
        and flexible deployment on edge or cloud environments.
      `,

    },
    {
      title: 'Why Choose Artfision',
      content: `
        Our platform simplifies AI adoption with pre-trained models, real-time analytics,
        and flexible deployment on edge or cloud environments.
      `,

    },
  ];
}
