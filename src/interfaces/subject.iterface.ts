import { IGrade } from "./grade.interface";

export class ISubject {
  _id?: string;
  email: string;
  grades?: IGrade[] | string[];
}
