import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Form } from '../../components/form/form';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Form],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {}