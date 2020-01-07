export class ReceiveStudentDto {
  _id?: string;
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  payments?: string[];
  grades?: string[];
}
