import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BtnContactUs } from '../btn-contact-us/btn-contact-us';

type MenuLink = { label: string; to: string };

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, BtnContactUs],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
  isOpen = signal(false);

  links: MenuLink[] = [
    { label: 'Accueil', to: '/' },
    { label: 'Chambres', to: '/rooms' },
    { label: 'À propos', to: '/about' },
  ];

  close(): void {
    this.isOpen.set(false);
  }
}