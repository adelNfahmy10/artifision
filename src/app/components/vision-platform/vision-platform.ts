import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vision-platform',
  imports: [NgClass],
  templateUrl: './vision-platform.html',
  styleUrl: './vision-platform.scss'
})
export class VisionPlatform {
  openIndex: number | null = null;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  items = [
    {
      title: 'Advanced Dataset Management and MLOps',
      content: `Collect and annotate digital images; train and evaluate AI vision models.`,
      icon: 'fa-layer-group'
    },
    {
      title: 'Exceptional Application Development',
      content: `Use our extensive API library to develop powerful AI vision applications for real-world deployments. Computer vision applications developed with alwaysAI are tailored to your business needs.`,
      icon: 'fa-laptop-code'

    },
    {
      title: 'Convenient Remote Deployment',
      content: `Easily deploy and manage AI vision models and applications remotely on the edge or in the cloud.`,
      icon:'fa-rocket'
    },
    {
      title: 'Unprecedented Real-Time Analytics',
      content: `Instantly act on real-time data generated from your cameras and AI vision.`,
      icon:'fa-chart-line'
    },
    {
      title: 'Next-Level Scalability',
      content: `Easily scale your AI vision applications across multiple cameras and locations. Our computer vision platform ensures that scalability is never an issue.`,
      icon:'fa-layer-group'
    }
  ];
}
