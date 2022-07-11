import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPerson() {
    const person = {
      nome: 'Ernesto Maria',
      idade: 18,
      sexo: 'Masculino',
    };
    return person;
  }
}
