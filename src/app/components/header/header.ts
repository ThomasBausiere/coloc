import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  readonly embedSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const id = '7Ft_WLnqx5A';
    const url =
      `https://www.youtube-nocookie.com/embed/${id}` +
      `?autoplay=1&mute=1&loop=1&playlist=${id}&playsinline=1&controls=0&rel=0&modestbranding=1`;

    this.embedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}