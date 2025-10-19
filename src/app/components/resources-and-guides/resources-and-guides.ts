import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-resources-and-guides',
  imports: [],
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
    title: 'Computer Vision Solutions (CV) Explained',
    description:
      'CV is a cutting-edge field of artificial intelligence (AI) that empowers computers to interpret and understand the world around them. It allows businesses to detect people, objects, and events – in real-time – to capture more accurate data and detect beyond what employees can monitor.',
  },
  {
    image: 'assets/resource/How to Preserve Data Privacy.png',
    title: 'How to Preserve Data Privacy With Computer Vision Solutions',
    description:
      'Learn about privacy-preserving computer vision applications that drive meaningful insights for businesses and boost ROI.',
  },
  {
    image: 'assets/resource/Object Detection Apps and.png',
    title: 'Object Detection Apps and Software for Business',
    description:
      "Build and deploy powerful object detection apps and software with alwaysAI's user-friendly platform, pre-trained models, and flexible APIs.",
  },
  {
    image: 'assets/resource/Automated Anomaly Detection.png',
    title: 'Automated Anomaly Detection in Manufacturing',
    description:
      'Computer vision and machine learning offer powerful capabilities to collect and understand real-time data - automating anomaly detection and improving manufacturing production efficiency.',
  },
  {
    image: 'assets/resource/What is Object Tracking and Re ldentification.png',
    title: 'What is Object Tracking and Re-Identification',
    description:
      'Learn all about object tracking and how to use re-identification with computer vision platforms for improved business operations.',
  },
  {
    image: 'assets/resource/What YOLO Model Architecture.png',
    title: 'What YOLO Model Architecture Is Best for You?',
    description:
      'Many different YOLO models claim to be the best. Newer doesn’t mean better. Learn how to choose the correct YOLO version based on your needs.',
  },
  {
    image: 'assets/resource/Computer Vision is Not Generative Al, Its Practical AI.png',
    title: "Computer Vision is Not Generative AI, It's Practical AI",
    description:
      'Generative AI and computer vision are two types of AI that transform the way businesses operate across industries. Learn how computer vision works and how it practically addresses your business pain points to drive more revenue.',
  }
];

}
