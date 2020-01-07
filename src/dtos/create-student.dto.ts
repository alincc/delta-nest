export class CreateUserDto {
  userId?: number;
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  profileUrl: string;
  role: string;
  school: number;
  group?: number;
  approvedForFlights?: number[];
  requestedForFlights?: number[];
  subjects?: number[];
  payments?: number[];
}
