import { IStudent } from "./student.iterface";

export interface IGroup {
  _id?: string;
  name: string;
  avatarUrl: string;
  students?: IStudent[] | string[];
}
