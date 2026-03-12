import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AllContent, CommonContent, RoomContent, RoomKey } from '../models/content.model';
import { ContentRepository } from './content.repository';

@Injectable({ providedIn: 'root' })
export class MockContentRepository extends ContentRepository {
  private readonly all$: Observable<AllContent>;

  constructor(private http: HttpClient) {
    super();

    this.all$ = this.http
      .get<AllContent>('/assets/mock/content.json')
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }

  getAll(): Observable<AllContent> {
    return this.all$;
  }

  getCommon(): Observable<CommonContent> {
    return this.all$.pipe(map(all => all.common));
  }

  getRoom(key: RoomKey): Observable<RoomContent> {
    return this.all$.pipe(map(all => all[key]));
  }
}