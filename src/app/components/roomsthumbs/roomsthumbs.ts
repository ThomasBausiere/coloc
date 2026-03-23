import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

type RoomThumb = {
  id: number;
  title: string;
  image: string;
  available: boolean;
  surface: string;
  bedSize: string;
  loyer: number;
  loyerCalculated:string
};

type RoomThumbsMode = 'all' | 'others';

@Component({
  selector: 'app-roomsthumbs',
  standalone: true,
  imports: [],
  templateUrl: './roomsthumbs.html',
  styleUrl: './roomsthumbs.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Roomsthumbs {
  @Input() mode: RoomThumbsMode = 'all';

  get isOthersMode(): boolean {
  return this.mode === 'others';
}

  readonly allRooms: RoomThumb[] = [
    { id: 1, title: 'Chambre 1', image: 'assets/images/room1_01.jpg', available: true, surface:"13", bedSize:"140x200", loyer:400, loyerCalculated:"400€ + 80€ charges" },
    { id: 2, title: 'Chambre 2', image: 'assets/images/room2_01.jpg', available: true, surface:"11", bedSize:"140x190", loyer:400, loyerCalculated:"400€ + 80€ charges" },
    { id: 3, title: 'Chambre 3', image: 'assets/images/room3_01.jpg', available: true, surface:"14", bedSize:"140x200", loyer:400, loyerCalculated:"400€ + 80€ charges" },
    { id: 4, title: 'Chambre 4', image: 'assets/images/room4_01.jpg', available: true, surface:"14", bedSize:"140x200", loyer:400, loyerCalculated:"400€ + 80€ charges" },
  ];

  readonly allDescription =
    "test Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  readonly othersDescription =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  constructor(private router: Router) {}

  get title(): string {
    return this.mode === 'others' ? 'Les autres chambres' : 'Les chambres';
  }

  get description(): string {
    return this.mode === 'others' ? this.othersDescription : this.allDescription;
  }

  get displayedRooms(): RoomThumb[] {
    if (this.mode !== 'others') {
      return this.allRooms;
    }

    const currentRoomId = this.getStoredRoomId();
    return this.allRooms.filter(room => room.id !== currentRoomId);
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