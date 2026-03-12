import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Roomsthumbs } from '../../components/roomsthumbs/roomsthumbs';
import { Roomsview } from '../../components/roomsview/roomsview';
import { Form } from '../../components/form/form';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [Roomsthumbs, Roomsview, Form],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rooms {}