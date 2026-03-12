import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Roomstemplates } from '../../components/roomstemplates/roomstemplates';
import { Stuff } from '../../components/stuff/stuff';
import { Roomsthumbs } from '../../components/roomsthumbs/roomsthumbs';
import { Form } from '../../components/form/form';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [Roomstemplates, Stuff, Roomsthumbs, Form],
  templateUrl: './room.html',
  styleUrl: './room.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Room {}