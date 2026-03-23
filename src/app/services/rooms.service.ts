import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private readonly url = 'assets/data/rooms.json';

  constructor(private http: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.url);
  }

  getRoomById(id: number): Observable<Room | undefined> {
    return new Observable(observer => {
      this.getRooms().subscribe(rooms => {
        observer.next(rooms.find(r => r.id === id));
        observer.complete();
      });
    });
  }
}