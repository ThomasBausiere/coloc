import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

type RoomInfo = {
  id: number;
  title: string;
  available: boolean;
  city: string;
  sizeM2: number;
  description: string;
};

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

  room!: RoomInfo;

  images!: {
    main: string;
    a: string;
    b: string;
  };

  readonly sideImage1 = 'assets/images/test.png';
  readonly sideImage2 = 'assets/images/test2.png';

  private sub?: Subscription;

  constructor(
    private router: Router,
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
    this.room = this.buildRoom(this.roomId);
    this.images = {
      main: `assets/images/room${this.roomId}_01.jpg`,
      a: `assets/images/room${this.roomId}_02.jpg`,
      b: `assets/images/room${this.roomId}_03.jpg`,
    };

    this.cdr.markForCheck();
  }

  private getRoomId(): number {
    const raw = localStorage.getItem('roomId');
    const id = raw ? Number(raw) : 1;
    return Number.isFinite(id) && id >= 1 && id <= 4 ? id : 1;
  }

  private buildRoom(id: number): RoomInfo {
    const available = id !== 2;

    return {
      id,
      title: 'Titre',
      available,
      city: 'Valenciennes',
      sizeM2: 15,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    };
  }
}