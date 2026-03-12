import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnContactUs } from '../btn-contact-us/btn-contact-us';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BtnContactUs],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {}