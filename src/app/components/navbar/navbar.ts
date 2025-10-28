import { Component, inject } from '@angular/core';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [ TranslateModule, TranslatePipe ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  private readonly _TranslateService = inject(TranslateService)
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Translation Code
  lang: string =  'en';
  switchLang() {
    this.lang = this.lang === 'en' ? 'ar' : 'en';
    this._TranslateService.use(this.lang);
    const htmlTag = document.documentElement;
    if (this.lang === 'en') { htmlTag.setAttribute('dir', 'ltr');
      htmlTag.setAttribute('lang', 'en');
    } else { htmlTag.setAttribute('dir', 'rtl');
      htmlTag.setAttribute('lang', 'ar');
    }
  }
}
