import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  baser = environment.apiUrl;
  isMobileMenuOpen = false;

  navItems = [
    { title: '', link: '#' },
    { title: 'firstTeam', link: '#' },
    { title: 'club', link: '#' },
    { title: 'espaiBarca', link: '#' },
    { title: 'members', link: '#' },
    { title: 'moreTeams', link: '#' },
    { title: '', link: '#' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
