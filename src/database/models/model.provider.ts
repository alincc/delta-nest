import { User } from './user.model';
import { Subject } from './subject.model';
import { Payment } from './payment.model';
import { Group } from './group.model';
import { School } from './school.model';
import { Flight } from './flight.model';

export const ModelsProviders = [
  {
    provide: 'SUBJECTS_REPOSITORY',
    useValue: Subject,
  },
  {
    provide: 'PAYMENTS_REPOSITORY',
    useValue: Payment,
  },
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
  {
    provide: 'GROUPS_REPOSITORY',
    useValue: Group,
  },
  {
    provide: 'SCHOOLS_REPOSITORY',
    useValue: School,
  },
  {
    provide: 'FLIGHTS_REPOSITORY',
    useValue: Flight,
  },
];
