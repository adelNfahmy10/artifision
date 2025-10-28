import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-resources-and-guides',
  imports: [TranslatePipe],
  templateUrl: './resources-and-guides.html',
  styleUrl: './resources-and-guides.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ResourcesAndGuides {
  swiperConfig: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween:20,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween:20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween:20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween:20,
      },
      0: {
        slidesPerView: 1,
        spaceBetween:20,
      }
    }
  };

  cards = [
  {
    image: 'assets/resource/Computer Vision Solutions (CV) Explained.png',
    title: 'RESOURCES.ARTICLES.CV_EXPLAINED',
    description:'RESOURCES.ARTICLES.CV_EXPLAINED_DESC'
  },
  {
    image: 'assets/resource/How to Preserve Data Privacy.png',
    title: 'RESOURCES.ARTICLES.PRIVACY',
    description: 'RESOURCES.ARTICLES.PRIVACY_DESC'
  },
  {
    image: 'assets/resource/Object Detection Apps and.png',
    title: 'RESOURCES.ARTICLES.OBJECT_DETECTION',
    description: 'RESOURCES.ARTICLES.OBJECT_DETECTION_DESC'
  },
  {
    image: 'assets/resource/Automated Anomaly Detection.png',
    title: 'RESOURCES.ARTICLES.ANOMALY',
    description: 'RESOURCES.ARTICLES.ANOMALY_DESC'
  },
  {
    image: 'assets/resource/What is Object Tracking and Re ldentification.png',
    title: 'RESOURCES.ARTICLES.TRACKING',
    description: 'RESOURCES.ARTICLES.TRACKING_DESC'
  },
  {
    image: 'assets/resource/What YOLO Model Architecture.png',
    title: 'RESOURCES.ARTICLES.YOLO',
    description: 'RESOURCES.ARTICLES.YOLO_DESC'
  },
  {
    image: 'assets/resource/Computer Vision is Not Generative Al, Its Practical AI.png',
    title: 'RESOURCES.ARTICLES.PRACTICAL_AI',
    description: 'RESOURCES.ARTICLES.PRACTICAL_AI_DESC'
  }
];

}
