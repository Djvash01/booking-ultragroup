export interface Hotel {
  name: string;
  id?: string;
  imgUrl: string;
  city: string;
  disabled: boolean;
  location: string;
  rooms: Room[];
}

export interface Room {
  id?: string;
  cost: number;
  tax: number;
  type: string;
  location: string;
  disabled: boolean;
}