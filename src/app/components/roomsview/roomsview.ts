import { ChangeDetectionStrategy, Component } from '@angular/core';

type MosaicItem = {
  src: string;
  alt: string;
  key: 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
};

@Component({
  selector: 'app-roomsview',
  standalone: true,
  imports: [],
  templateUrl: './roomsview.html',
  styleUrl: './roomsview.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Roomsview {
  readonly title = 'L’appartement';

  readonly description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

readonly items: MosaicItem[] = [
  { key: 'a', src: 'assets/images/common_01.jpg', alt: 'Salon appartement' },
  { key: 'b', src: 'assets/images/common_04.jpg', alt: 'Coin repas appartement' },
  { key: 'c', src: 'assets/images/common_03.jpg', alt: 'Vue principale appartement' },
  { key: 'd', src: 'assets/images/common_02.jpg', alt: 'Salle de bain appartement' },
  { key: 'e', src: 'assets/images/common_05.jpg', alt: 'Cuisine appartement' },
  { key: 'f', src: 'assets/images/common_06.jpg', alt: 'Pièce appartement' },
];
}
