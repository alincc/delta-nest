import { Flight } from './flight.model';
import { Grade } from './grade.model';
import { Group } from './group.model';
import { Payment } from './payment.model';
import { Principal } from './principal.model';
import { School } from './school.model';
import { Student } from './student.model';
import { Subject } from './subject.model';

export const ModelsProviders = [
  {
    provide: 'FLIGHTS_REPOSITORY',
    useValue: Flight,
  },
  {
    provide: 'GRADES_REPOSITORY',
    useValue: Grade,
  },
  {
    provide: 'GROUPS_REPOSITORY',
    useValue: Group,
  },
  {
    provide: 'PAYMENTS_REPOSITORY',
    useValue: Payment,
  },
  {
    provide: 'PRINCIPALS_REPOSITORY',
    useValue: Principal,
  },
  {
    provide: 'SCHOOLS_REPOSITORY',
    useValue: School,
  },
  {
    provide: 'STUDENTS_REPOSITORY',
    useValue: Student,
  },
  {
    provide: 'SUBJECTS_REPOSITORY',
    useValue: Subject,
  },
];
