import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-vision-platform',
  imports: [NgClass, TranslatePipe],
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
      title: 'PLATFORM.POINTS.DATASET',
      content: `PLATFORM.POINTS.DATASET_DESC`,
      icon: 'fa-layer-group'
    },
    {
      title: 'PLATFORM.POINTS.APP_DEV',
      content: `PLATFORM.POINTS.APP_DEV_DESC`,
      icon: 'fa-laptop-code'
    },
    {
      title: 'PLATFORM.POINTS.REMOTE_DEPLOY',
      content: `PLATFORM.POINTS.REMOTE_DEPLOY_DESC`,
      icon:'fa-rocket'
    },
    {
      title: 'PLATFORM.POINTS.REALTIME_ANALYTICS',
      content: `PLATFORM.POINTS.REALTIME_ANALYTICS_DESC`,
      icon:'fa-chart-line'
    },
    {
      title: 'PLATFORM.POINTS.SCALABILITY',
      content: `PLATFORM.POINTS.SCALABILITY_DESC`,
      icon:'fa-layer-group'
    }
  ];
}
