export class CreateSchoolDto {
  schoolId?: number;
  name: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  users?: number[];
  groups?: number[];
  incomingPayments?: number[];
  Subject?: number[];
  flights?: number[];
}
