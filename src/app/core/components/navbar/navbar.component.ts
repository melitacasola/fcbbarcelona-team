import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
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
