import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import PersonContact from '../models/PersonContact';

export default {
  async index(request: Request, response: Response){ //GET que lista todas os contatos da agenda
    const personContactRepository = getRepository(PersonContact);

    const contacts = await personContactRepository.find();

    return response.json(contacts);
  },  

  async create(request: Request, response: Response){  //POST para criar contato
    const {
      contact,
      person_id,
      contactType_id
    } = request.body;

  const personContactRepository = getRepository(PersonContact);  

  const dataPerson ={
    contact,
    person_id,
    contactType_id
  };  
  console.log(dataPerson);
  const personContact = personContactRepository.create(dataPerson);//deixa pre-criado mas nao salva
     

  await personContactRepository.save(personContact);   //metodo que salva no banco

  return response.status(201).json(personContact);
  }
  
  

};