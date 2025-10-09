import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Industries } from "./components/industries/industries";
import { VisionPlatform } from "./components/vision-platform/vision-platform";
import { AIVisionSolutionsComponent } from "./components/aivision-solutions-component/aivision-solutions-component";
import { ResourcesAndGuides } from "./components/resources-and-guides/resources-and-guides";
import { AiCtaSection } from "./components/ai-cta-section/ai-cta-section";

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Industries, VisionPlatform, AIVisionSolutionsComponent, ResourcesAndGuides, AiCtaSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('artifision');
}
