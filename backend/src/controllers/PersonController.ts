import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Person from '../models/Person';

export default {
  async index(request: Request, response: Response){ //GET que lista todas as pessoas da agenda
    const peopleRepository = getRepository(Person);

    const people = await peopleRepository.find({
      order:{first_name:"ASC"}                      //ordenando o GET para listar os nomes em ordem alfabetica
    });

    return response.json(people);
  },
  async show(request: Request, response: Response){ //GET que mostra os detalhes de uma pessoa da agenda
    const { id } = request.params;

    const peopleRepository = getRepository(Person);

    const person = await peopleRepository.findOneOrFail(id);

    return response.json(person);
  },

  async create(request: Request, response: Response){  //POST para criar Pessoas
    const {
      first_name,
      last_name
    } = request.body;

  const peopleRepository = getRepository(Person);

  const dataPerson ={
    first_name,
    last_name
  };  

  const person = peopleRepository.create(dataPerson);//deixa pre-criado mas nao salva
     

  await peopleRepository.save(person);   //metodo que salva no banco

  return response.status(201).json(person);
  }  
  

};