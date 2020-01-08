import { ISchool } from "./school.interface";

export interface IPrincipal {
  _id?: string;
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  schools?: ISchool[] | string[];
}
