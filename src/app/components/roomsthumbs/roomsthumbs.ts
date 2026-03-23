import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../../models/room.model';
import { RoomsService } from '../../services/rooms.service';

type RoomThumbsMode = 'all' | 'others';

@Component({
  selector: 'app-roomsthumbs',
  standalone: true,
  imports: [],
  templateUrl: './roomsthumbs.html',
  styleUrl: './roomsthumbs.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Roomsthumbs implements OnInit {
  @Input() mode: RoomThumbsMode = 'all';

  rooms: Room[] = [];

  readonly allDescription =
    "test Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  readonly othersDescription =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  constructor(
    private router: Router,
    private roomsService: RoomsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.roomsService.getRooms().subscribe({
      next: (data) => {
        console.log('ROOMS LOADED:', data);
        this.rooms = data;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Erreur chargement rooms.json :', err);
      }
    });
  }

  get isOthersMode(): boolean {
    return this.mode === 'others';
  }

  get title(): string {
    return this.mode === 'others' ? 'Les autres chambres' : 'Les chambres';
  }

  get description(): string {
    return this.mode === 'others'
      ? this.othersDescription
      : this.allDescription;
  }

  get displayedRooms(): Room[] {
    if (this.mode !== 'others') {
      return this.rooms;
    }

    const currentRoomId = this.getStoredRoomId();
    return this.rooms.filter(room => room.id !== currentRoomId);
  }

  openRoom(id: number): void {
    localStorage.setItem('roomId', id.toString());

    this.router.navigate(['/room'], {
      queryParams: { rid: id }
    }).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  private getStoredRoomId(): number | null {
    const raw = localStorage.getItem('roomId');
    if (!raw) return null;

    const id = Number(raw);
    return Number.isFinite(id) ? id : null;
  }
}