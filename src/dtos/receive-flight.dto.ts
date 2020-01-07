export class ReceiveFlightDto {
  _id?: string;
  description: string;
  folio: string;
  time: number;
  maxPilots: number;
  isApproved: boolean;
  isPaid: boolean;
  pilots?: string[];
  principal?: string[];
}
