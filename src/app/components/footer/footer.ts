import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BtnContactUs } from '../btn-contact-us/btn-contact-us';

type FooterLink = { label: string; to: string };

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, BtnContactUs],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  links: FooterLink[] = [
    { label: 'Accueil', to: '/' },
    { label: 'Les chambres', to: '/rooms' },
    { label: 'À propos', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];
}