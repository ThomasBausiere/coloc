import { Observable } from 'rxjs';
import { AllContent, RoomContent, RoomKey, CommonContent } from '../models/content.model';

export abstract class ContentRepository {
  abstract getAll(): Observable<AllContent>;
  abstract getCommon(): Observable<CommonContent>;
  abstract getRoom(key: RoomKey): Observable<RoomContent>;
}