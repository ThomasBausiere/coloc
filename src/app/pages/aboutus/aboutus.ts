import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from '../../components/about/about';
import { Form } from '../../components/form/form';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [About, Form],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Aboutus {}