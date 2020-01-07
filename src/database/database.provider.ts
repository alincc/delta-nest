import { Sequelize } from 'sequelize-typescript';
import { School } from './models/school.model';
import { Group } from './models/group.model';
import { Payment } from './models/payment.model';
import { Subject } from './models/subject.model';
import { Flight } from './models/flight.model';
import { Grade } from './models/grade.model';
import { Principal } from './models/principal.model';
import { Student } from './models/student.model';

export const DatabaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: '162.250.121.69',
        port: 3306,
        username: 'cuadroso_nest',
        password: '6918mr22*',
        database: 'cuadroso_delta_mexico',
      });
      sequelize.addModels([
        Flight,
        Grade,
        Group,
        Payment,
        Principal,
        School,
        Student,
        Subject,
      ]);
      await sequelize.sync({ force: true });
      return sequelize;
    },
  },
];
