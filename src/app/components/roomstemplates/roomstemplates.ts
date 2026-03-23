import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { Room } from '../../models/room.model';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-roomstemplates',
  standalone: true,
  imports: [],
  templateUrl: './roomstemplates.html',
  styleUrl: './roomstemplates.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Roomstemplates implements OnInit, OnDestroy {
  roomId = 1;

  room?: Room;

  images!: {
    main: string;
    a: string;
    b: string;
  };



  private sub?: Subscription;

  constructor(
    private router: Router,
    private roomsService: RoomsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadRoomData();

    this.sub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadRoomData();
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private loadRoomData(): void {
    this.roomId = this.getRoomId();

    this.roomsService.getRoomById(this.roomId).subscribe({
      next: (room) => {
        if (!room) {
          return;
        }

        this.room = room;

        this.images = {
          main: `assets/images/room${this.roomId}_01.jpg`,
          a: `assets/images/room${this.roomId}_02.jpg`,
          b: `assets/images/room${this.roomId}_03.jpg`,
        };

        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Erreur chargement room :', err);
      }
    });
  }

  private getRoomId(): number {
    const raw = localStorage.getItem('roomId');
    const id = raw ? Number(raw) : 1;
    return Number.isFinite(id) && id >= 1 && id <= 4 ? id : 1;
  }
}