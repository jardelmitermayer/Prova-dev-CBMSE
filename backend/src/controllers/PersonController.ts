import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Person from '../models/Person';

export default {
  async create(request: Request, response: Response){
    const {
      first_name,
      last_name
    } = request.body;

  const peopleRepository = getRepository(Person);

  const person = peopleRepository.create({ //deixa pre-criado mas nao salva
      first_name,
      last_name
  });

  await peopleRepository.save(person);   //metodo que salva no banco

  return response.status(201).json(person);
  }

};