import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isMenuOpen = false;
  currentLang: 'ar' | 'en' = 'en';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLang() {
    this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
  }
}
