export type RoomKey = 'room1' | 'room2' | 'room3' | 'room4';

export interface RoomContent {
  titles: string[];
  descriptions: string[];
  images: string[]; // URLs (assets maintenant, API/CDN plus tard)
}

export interface CommonContent {
  titles: Record<string, string>;
  descriptions: Record<string, string>;
  images: Record<string, string>;
}

export interface AllContent {
  common: CommonContent;
  room1: RoomContent;
  room2: RoomContent;
  room3: RoomContent;
  room4: RoomContent;
}