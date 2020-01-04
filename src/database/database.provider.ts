import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user.model';
import { School } from './models/school.model';
import { Group } from './models/group.model';
import { Payment } from './models/payment.model';
import { Subject } from './models/subject.model';
import { Flight } from './models/flight.model';

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
        logging: false,
      });
      sequelize.addModels([School, Group, User, Flight, Payment, Subject]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
