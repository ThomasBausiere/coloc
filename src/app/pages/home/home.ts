import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Form } from '../../components/form/form';
import { About } from '../../components/about/about';
import { Roomsview } from '../../components/roomsview/roomsview';
import { Header } from '../../components/header/header';
import { Roomsthumbs } from '../../components/roomsthumbs/roomsthumbs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Form, About, Roomsview, Header, Roomsthumbs],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}