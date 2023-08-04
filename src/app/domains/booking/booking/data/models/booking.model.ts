import { EmergencyContact } from './emergency-contact.model';
import { Guest } from './guest.model';

export interface Booking {
  id: string
  hotelId: string;
  roomId: string;
  checkIn: Date;
  checkOut: Date;
  guests: Guest[];
  emergencyContact: EmergencyContact;
}