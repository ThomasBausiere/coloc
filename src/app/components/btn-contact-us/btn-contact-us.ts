import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-btn-contact-us',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './btn-contact-us.html',
  styleUrl: './btn-contact-us.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnContactUs {
  @Input() label = 'Contactez -nous';
}